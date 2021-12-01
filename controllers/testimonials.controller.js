const { v4: uuidv4 } = require('uuid');
const Testimonial = require('../models/testimonial.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Testimonial.find());
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getRandom = async (req, res) => {
  try {
    const count = await Testimonial.countDocuments();
    const rand = Math.floor(Math.random() * count);
    const testi = await Testimonial.findOne().skip(rand);
    if (!testi) res.status(404).json({ message: 'Not found' });
    else res.json(testi);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getId = async (req, res) => {
  try {
    const testi = await Testimonial.findById(req.params.id);
    if (!testi) res.status(404).json({ message: 'Not found' });
    else res.json(testi);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.post = async (req, res) => {
  try {
    const { author, text } = req.body;
    const newTestimontial = new Testimonial({ id: uuidv4(), author: author, text: text });
    await newTestimontial.save();
    res.json({ message: 'OK' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.put = async (req, res) => {
  const { author, text } = req.body;
  try {
    const testi = await Testimonial.findById(req.params.id);
    if (testi) {
      await Testimonial.updateOne({ _id: req.params.id }, { $set: { author: author, text: text } });
      res.json({ message: 'OK' });
    }
    else res.status(404).json({ message: 'Not found...' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.delete = async (req, res) => {
  try {
    const testi = await Testimonial.findById(req.params.id);
    if (testi) {
      await Testimonial.deleteOne({ _id: req.params.id });
      res.json({ message: 'OK' });
    }
    else res.status(404).json({ message: 'Not found...' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};