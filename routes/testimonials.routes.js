const express = require('express');
const router = express.Router();
const db = require('../db/db');
const { v4: uuidv4 } = require('uuid');
const { randomElement, findIndex, findElement } = require('../functions');

router.route('/testimonials').get((req, res) => {
  res.json(db.testimonials);
});
router.route('/testimonials/:id').get((req, res) => {
  const id = req.params.id;
  const resp = findElement(id, db.testimonials);
  res.json(resp);
});


//???????????????????????? a nie /testimonials/random
router.route('/testimonialsrandom').get((req, res) => {
  const randomEl = randomElement(db.testimonials);
  console.log('Element: ', randomEl);
  const obj = db.testimonials[randomEl];
  console.log('Obj: ', obj);

  res.json(obj);
});



router.route('/testimonials').post((req, res) => {
  const { author, text } = req.body;
  db.testimonials.push({ id: uuidv4(), author: author, text: text });
  res.json({ message: 'OK' });
});
router.route('/testimonials/:id').put((req, res) => {
  const id = req.params.id;
  const { author, text } = req.body;
  const index = findIndex(id, db.testimonials);
  db.testimonials[index].author = author;
  db.testimonials[index].text = text;
  res.json({ message: 'OK' });
});
router.route('/testimonials/:id').delete((req, res) => {
  const id = req.params.id;
  const index = findIndex(id, db.testimonials);
  db.testimonials.splice(index, 1);
  res.json({ message: 'OK' });
});

module.exports = router;