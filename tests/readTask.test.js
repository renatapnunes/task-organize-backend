const chaiHttp = require('chai-http');
const chai = require('chai');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');

const { getConnection } = require('./connectionMock');
const app = require('../src/api/app');

const { expect } = chai;

chai.use(chaiHttp);

describe('GET /task', function () {
  let connectionMock;
    
  before(async function () {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);

    const tasksCollection = connectionMock.db('Tasks').collection('tasks');
    await tasksCollection.insertOne({
      task: 'Code Review - Projeto To-Do List',
      status: 'PENDENTE',
      created: '14-02-2022',
      update: '14-02-2022',
    });
    await tasksCollection.insertOne({
      task: 'Reunião com time de UX/UI',
      status: 'PRONTO',
      created: '15-02-2022',
      update: '15-02-2022',
    });
  });

  after(function () {
    MongoClient.connect.restore();
  });

  describe('When the request is successful', function () {
    let response;

    before(async function () {
      response = await chai.request(app)
        .get('/task')
        .send({});
    });

    it('Response status 200: Ok', function () {
      expect(response).to.have.status(200);
    });

    it('Response is an array', function () {
      expect(response.body).to.be.an('array');
    });

    it('Response is an array of objects', function () {
      expect(response.body[0]).to.be.an('object');
      expect(response.body[1]).to.be.an('object');
    });

    const properties = '"_id", "task", "status", "created" and "update"';

    it(`The response array contains objects with the properties: ${properties}`, function () {
      expect(response.body[0]).to.include.all.keys('_id', 'task', 'status', 'created', 'update');
    });
  });
});
