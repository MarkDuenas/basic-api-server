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

  it('can add a new record in animal model', async () => {
    let obj = {
      type: "mammal",
      legs: "4",
    }
    const results = await mockRequest.post('/animal').send(obj)
    expect(results.body.record).toEqual(obj);
    expect(results.status).toBe(201);
  });

  it('can get a list of animals', async () => {
    const results =  await mockRequest.get('/animal');
    expect(results.status).toBe(200);
    expect(Array.isArray(results.body)).toBeTruthy();
    expect(results.body.length).toEqual(1);
  });

  it('can get a animal', async () => {
    const results = await mockRequest.get('/animal/1')
    expect(results.status).toBe(200);
    expect(results.body.id).toEqual(1);
  });

  it('can update animal', async () => {
    let obj = {
      type: "reptile",
      legs: "4",
    }
    const results = await mockRequest.put('/animal/1').send(obj);
    expect(results.status).toBe(200);
    expect(results.body.id).toEqual(1);
    expect(results.body.record).toEqual(obj);
  });

  it('can delete animal', async () => {
    const results = await mockRequest.delete('/animal/1')
    expect(results.status).toBe(204);
    expect(results.body.record).toBeFalsy();

    const getReponse = await mockRequest.get('/animal');
    expect(getReponse.body.length).toEqual(0);
     
  });

  it('can add a new record in penguin model', async () => {
    let obj = {
      type: "mammal",
      legs: "4",
    }
    const results = await mockRequest.post('/penguin').send(obj)
    expect(results.body.record).toEqual(obj);
    expect(results.status).toBe(201);
  });

  it('can get a list of penguins', async () => {
    const results =  await mockRequest.get('/penguin');
    expect(results.status).toBe(200);
    expect(Array.isArray(results.body)).toBeTruthy();
    expect(results.body.length).toEqual(1);
  });

  it('can get a penguin', async () => {
    const results = await mockRequest.get('/penguin/1')
    expect(results.status).toBe(200);
    expect(results.body.id).toEqual(1);
  });

  it('can update penguin', async () => {
    let obj = {
      type: "reptile",
      legs: "4",
    }
    const results = await mockRequest.put('/penguin/1').send(obj);
    expect(results.status).toBe(200);
    expect(results.body.id).toEqual(1);
    expect(results.body.record).toEqual(obj);
  });

  it('can delete penguin', async () => {
    const results = await mockRequest.delete('/penguin/1')
    expect(results.status).toBe(204);
    expect(results.body.record).toBeFalsy();

    const getReponse = await mockRequest.get('/penguin');
    expect(getReponse.body.length).toEqual(0);
     
  });

})