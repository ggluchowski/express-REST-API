const express = require('express');
const router = express.Router();
const db = require('../db/db');
const { v4: uuidv4 } = require('uuid');
const { findIndex, findElement } = require('../functions');

router.route('/concerts').get((req, res) => {
  res.json(db.concerts);
});

router.route('/concerts/:id').get((req, res) => {
  const id = req.params.id;
  const resp = findElement(id, db.concerts);
  res.json(resp);
});

router.route('/concerts').post((req, res) => {
  const { performer, genre, price, day, image } = req.body;
  db.concerts.push({ id: uuidv4(), performer: performer, genre: genre, price: price, day: day, image: image });
  res.json({ message: 'OK' });
});

router.route('/concerts/:id').put((req, res) => {
  const id = req.params.id;
  const { performer, genre, price, day, image } = req.body;
  const index = findIndex(id, db.concerts);
  db.concerts[index].performer = performer;
  db.concerts[index].genre = genre;
  db.concerts[index].price = price;
  db.concerts[index].day = day;
  db.concerts[index].image = image;
  res.json({ message: 'OK' });
});

router.route('/concerts/:id').delete((req, res) => {
  const id = req.params.id;
  const index = findIndex(id, db.concerts);
  db.concerts.splice(index, 1);
  res.json({ message: 'OK' });
});

module.exports = router;