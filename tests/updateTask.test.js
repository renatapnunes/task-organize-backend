const chaiHttp = require('chai-http');
const chai = require('chai');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');

const { getConnection } = require('./connectionMock');
const app = require('../src/api/app');

const { expect } = chai;

chai.use(chaiHttp);

describe('PUT /task/:id', function () {
  const mockBodyReq = {
    task: 'Code Review - Projeto To-Do List',
    status: 'PENDENTE',
    created: '14-02-2022',
  };

  let connectionMock;
    
  before(async function () {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);

    const tasksCollection = connectionMock.db('Tasks').collection('tasks');
    await tasksCollection.insertOne({
      ...mockBodyReq,
      update: '14-02-2022',
    });
  });

  after(function () {
    MongoClient.connect.restore();
  });

  describe('When request body data is not valid', function () {
    let response;

    before(async function () {
      response = await chai.request(app)
        .get('/task')
        .send({});

      const { id } = response.body[0];
      
      response = await chai.request(app)
        .put(`/task/${id}`)
        .send({});
    });

    it('Response status 400: Bad Request', function () {
      expect(response).to.have.status(400);
    });

    it('Response is an object', function () {
      expect(response.body).to.be.an('object');
    });

    it('Response object contains "message" property', function () {
      expect(response.body).to.have.property('message');
    });
  });

  describe('When the id passed as a parameter is not valid', function () {
    let response;

    before(async function () {
      response = await chai.request(app)
        .put('/task/123456')
        .send({ ...mockBodyReq, status: 'EM ANDAMENTO' });
    });

    it('Response status 400: Bad Request', function () {
      expect(response).to.have.status(400);
    });
  });

  describe('When the request is successful', function () {
    let response;

    before(async function () {
      response = await chai.request(app)
        .get('/task')
        .send({});

      const { _id: id } = response.body[0];
      
      response = await chai.request(app)
        .put(`/task/${id}`)
        .send({ ...mockBodyReq, status: 'EM ANDAMENTO' });
    });

    it('Response status 200: Ok', function () {
      expect(response).to.have.status(200);
    });

    it('Response is an object', function () {
      expect(response.body).to.be.an('object');
    });

    it('Response object contains "message" property', function () {
      expect(response.body).to.have.property('message');
    });

    it('The message is "Successfully updated."', function () {
      expect(response.body.message).to.be.equal('Successfully updated.');
    });
  });
});
