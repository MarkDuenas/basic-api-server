'use strict';

const express = require('express');
const PenguinModel = require('../models/penguin.js');

const penguins = new PenguinModel();

const penguinRouter = express.Router();

penguinRouter.get('/penguin', getAllPenguin);
penguinRouter.get('/penguin/:id', getOnePenguin);
penguinRouter.post('/penguin', createPenguin);
penguinRouter.put('/penguin/:id', updatePenguin);
penguinRouter.delete('/penguin/:id', deletePenguin);

function getAllPenguin(req, res) {
  let all = penguins.get();
  res.status(200).json(all);
} 

function getOnePenguin(req, res) {
  let id = parseInt(req.params.id);
  let Penguin = penguins.get(id);
  res.status(200).json(Penguin);
}

function createPenguin(req, res) {
  let obj = req.body;
  let newPenguin = penguins.create(obj);
  res.status(201).json(newPenguin);
}

function updatePenguin(req, res) {
  let id = parseInt(req.params.id);
  let content = req.body;
  let updated = penguins.update(id, content);
  res.status(200).json(updated);
}

function deletePenguin(req, res) {
  let id = parseInt(req.params.id);
  let deleted = penguins.delete(id);
  res.status(204).send('Penguin has been deleted');
}

module.exports = penguinRouter;