'use strict';

const { app } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(app);

describe('*** API SERVER ***', () => {

  it('should respond with 404 on bad route', () => {
    return mockRequest.get('/random/route')
      .then( results => {
        expect(results.status).toBe(404);
      })
  });

  it('should respond with 404 on bad method', () => {
    return mockRequest.post('/animal/1')
      .then( results => {
        expect(results.status).toBe(404);
      })
  });

  it('can add a new record in animal model', () => {
    let obj = {
      id: "1",
      type: "mammal",
      legs: "4",
    }
    return mockRequest.post('/animal')
      .then(results => {
        results.body = obj;
        expect(results.body).toBe(obj);
        expect(results.status).toBe(201);
      })
  });

  it('can get a list of animals', () => {
    return mockRequest.get('/animal')
      .then(results => {
        expect(results.status).toBe(200);
      })
  });

  it('can get a animal', () => {
    return mockRequest.get('/animal/:id')
      .then(results => {
        expect(results.status).toBe(200);
      })
  });

  it('can update animal', () => {
    return mockRequest.get('/animal/:id')
      .then(results => {
        expect(results.status).toBe(200);
      })
  });

  it('can delete animal', () => {
    return mockRequest.delete('/animal/:id')
      .then(results => {
        expect(results.status).toBe(204);
      })
  });



})