'use strict';

const express = require('express');
const AnimalModel = require('../models/animal.js');

const animals = new AnimalModel();

const animalRouter = express.Router();

// Routes
animalRouter.get('/animal', getAllAnimal);
animalRouter.get('/animal/:id', getOneAnimal);
animalRouter.post('/animal', createAnimal);
animalRouter.put('/animal/:id', updateAnimal);
animalRouter.delete('/animal/:id', deleteAnimal);

function getAllAnimal(req, res) {
  let all = animals.get();
  res.status(200).json(all);
} 

function getOneAnimal(req, res) {
  let id = parseInt(req.params.id);
  let animal = animals.get(id);
  res.status(200).json(animal);
}

function createAnimal(req, res) {
  let obj = req.body;
  let newAnimal = animals.create(obj);
  res.status(201).json(newAnimal);
}

function updateAnimal(req, res) {
  let id = parseInt(req.params.id);
  let content = req.body;
  let updated = animals.update(id, content);
  res.status(200).json(updated);
}

function deleteAnimal(req, res) {
  let id = parseInt(req.params.id);
  let deleted = animals.delete(id);
  res.status(204).send('Animal has been deleted');
}

module.exports = animalRouter;