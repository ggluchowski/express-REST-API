const express = require('express');
const router = express.Router();
const db = require('../db/db');
const { v4: uuidv4 } = require('uuid');
const { findIndex, findElement } = require('../functions');

router.route('/seats').get((req, res) => {
  res.json(db.seats);
});

router.route('/seats/:id').get((req, res) => {
  const id = req.params.id;
  const resp = findElement(id, db.seats);
  res.json(resp);
});

router.route('/seats').post((req, res) => {
  const { day, seat, client, email } = req.body;
  let status = 0;
  for (let element of db.seats){
    if(element.day === day && element.seat === seat){
      status = 1;
    } else {
      status = 0;
    }
  }

  if(status === 1) {
    return res.status(400).json({message: 'The slot is already taken...'});
  } else {
    db.seats.push({ id: uuidv4(), day: day, seat: seat, client: client, email: email });
    return res.status(200).json({ message: 'OK' });
  }
});

router.route('/seats/:id').put((req, res) => {
  const id = req.params.id;
  const { day, seat, client, email } = req.body;
  const index = findIndex(id, db.seats);
  db.seats[index].day = day;
  db.seats[index].seat = seat;
  db.seats[index].client = client;
  db.seats[index].email = email;
  res.json({ message: 'OK' });
});

router.route('/seats/:id').delete((req, res) => {
  const id = req.params.id;
  const index = findIndex(id, db.seats);
  db.seats.splice(index, 1);
  res.json({ message: 'OK' });
});

module.exports = router;