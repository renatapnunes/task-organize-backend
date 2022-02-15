const chaiHttp = require('chai-http');
const chai = require('chai');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');

const { getConnection } = require('./connectionMock');
const app = require('../src/api/app');

const { expect } = chai;

chai.use(chaiHttp);

describe('Routes to DELETE ONE or ALL tasks', function () {
  const mockBodyReq01 = {
    task: 'Code Review - Projeto To-Do List',
    status: 'PENDENTE',
    created: '14-02-2022',
    update: '14-02-2022',
  };

  const mockBodyReq02 = {
    task: 'Reunião com time de UX/UI',
    status: 'PRONTO',
    created: '15-02-2022',
    update: '15-02-2022',
  };
  
  let connectionMock;
    
  before(async function () {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  
    const tasksCollection = connectionMock.db('Tasks').collection('tasks');
    await tasksCollection.insertOne({ ...mockBodyReq01 });
    await tasksCollection.insertOne({ ...mockBodyReq02 });
  });
  
  after(function () {
    MongoClient.connect.restore();
  });

  describe('DELETE /task/:id', function () {
    describe('When the id passed as a parameter is not valid', function () {
      let response;
  
      before(async function () {
        response = await chai.request(app)
          .delete('/task/123456')
          .send({});
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
          .delete(`/task/${id}`)
          .send({});
      });
  
      it('Response status 200: Ok', function () {
        expect(response).to.have.status(200);
      });
    });
  });

  describe('DELETE /task/', function () {
    describe('When the request is successful', function () {
      let response;
  
      before(async function () { 
        response = await chai.request(app)
          .delete('/task')
          .send({});
      });
  
      it('Response status 200: Ok', function () {
        expect(response).to.have.status(200);
      });
    });
  });
});
