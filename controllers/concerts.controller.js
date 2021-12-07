const { v4: uuidv4 } = require('uuid');
const Concert = require('../models/concert.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Concert.find());
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getId = async (req, res) => {
  try {
    const conc = await Concert.findById(req.params.id);
    if (!conc) res.status(404).json({ message: 'Not found' });
    else res.json(conc);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.post = async (req, res) => {
  try {
    const { performer, genre, price, day, image } = req.body;
    const newConcert = new Concert({ id: uuidv4(), performer: performer, genre: genre, price: price, day: day, image: image });
    await newConcert.save();
    res.json({ message: 'OK' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.put = async (req, res) => {
  const { performer, genre, price, day, image } = req.body;

  try {
    const conc = await Concert.findById(req.params.id);
    if (conc) {
      await Concert.updateOne({ _id: req.params.id }, { $set: { performer: performer, genre: genre, price: price, day: day, image: image } });
      res.json({ message: 'OK' });
    }
    else res.status(404).json({ message: 'Not found...' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.delete = async (req, res) => {
  try {
    const conc = await Concert.findById(req.params.id);
    if (conc) {
      await Concert.deleteOne({ _id: req.params.id });
      res.json({ message: 'OK' });
    }
    else res.status(404).json({ message: 'Not found...' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// new controllers

exports.getPerformer = async (req, res) => {
  try {
    const performer = await Concert.find({ performer: req.params.performer });
    if (!performer) res.status(404).json({ message: 'Not found' });
    else res.json(performer);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getGenre = async (req, res) => {
  try {
    const genre = await Concert.find({ genre: req.params.genre });
    if (!genre) res.status(404).json({ message: 'Not found' });
    else res.json(genre);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getPrice = async (req, res) => {
  try {
    const min = req.params.price_min;
    const max = req.params.price_max;

    const price = await Concert.find({ price: { $gt: min, $lt: max } });
    if (!price) res.status(404).json({ message: 'Not found' });
    else res.json(price);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getDay = async (req, res) => {
  try {
    const day = await Concert.find({ day: req.params.day });
    if (!day) res.status(404).json({ message: 'Not found' });
    else res.json(day);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};