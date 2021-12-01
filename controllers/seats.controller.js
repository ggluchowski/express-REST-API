const { v4: uuidv4 } = require('uuid');
const Seat = require('../models/seat.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Seat.find());
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getId = async (req, res) => {
  try {
    const seaty = await Seat.findById(req.params.id);
    if (!seaty) res.status(404).json({ message: 'Not found' });
    else res.json(seaty);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.post = async (req, res) => {
  try {
    const { day, seat, client, email } = req.body;
    const newSeat = new Seat({ id: uuidv4(), day: day, seat: seat, client: client, email: email });
    const seaty = await Seat.findOne({ day: day, seat: seat });
    if (seaty === null) {
      await newSeat.save();
      const seatAll = await Seat.find();
      //https://stackoverflow.com/questions/18856190/use-socket-io-inside-a-express-routes-file
      const socket = req.app.get('socket');
      socket.emit('seatsUpdated', seatAll);
      return res.status(200).json({ message: 'OK' });
    }
    else res.status(400).json({ message: 'The slot is already taken...' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.put = async (req, res) => {
  const { day, seat, client, email } = req.body;
  try {
    const seaty = await Seat.findById(req.params.id);
    if (seaty) {
      await Seat.updateOne({ _id: req.params.id }, { $set: { day: day, seat: seat, client: client, email: email } });
      res.json({ message: 'OK' });;
    }
    else res.status(404).json({ message: 'Not found...' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.delete = async (req, res) => {
  try {
    const seaty = await Seat.findById(req.params.id);
    if (seaty) {
      await Seat.deleteOne({ _id: req.params.id });
      res.json({ message: 'OK' });
    }
    else res.status(404).json({ message: 'Not found...' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};