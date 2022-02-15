const chaiHttp = require('chai-http');
const chai = require('chai');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');

const { getConnection } = require('./connectionMock');
const app = require('../src/api/app');

const { expect } = chai;

chai.use(chaiHttp);

describe('POST /task', function () {
  let connectionMock;
    
  before(async function () {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(function () {
    MongoClient.connect.restore();
  });
  
  describe('When request body data is not valid', function () {
    let response;

    before(async function () {
      response = await chai.request(app)
        .post('/task')
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

  describe('When a new task is successfully created', function () {
    let response;

    before(async function () {
      response = await chai.request(app)
        .post('/task')
        .send({
          task: 'Code Review - Projeto To-Do List',
          status: 'PENDENTE',
        });
    });

    it('Response status 201: Created', function () {
      expect(response).to.have.status(201);
    });

    it('Response is an object', function () {
      expect(response.body).to.be.an('object');
    });

    it('Response object contains "message" property', function () {
      expect(response.body).to.have.property('message');
    });

    it('The message is "Successfully created."', function () {
      expect(response.body.message).to.be.equal('Successfully created.');
    });
  });
});
