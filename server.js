const express = require('express');
const cors = require('cors');
const path = require('path');
const socket = require('socket.io');
const mongoose = require('mongoose');
const helmet = require('helmet');

const app = express();
app.use(helmet());
app.use(express.urlencoded({ extended: false })); //umozliwienie obslugi formularzy x-www-form-urlencoded
app.use(express.json());

const corsOptions =
{
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// serve static files from the React app
app.use(express.static(path.join(__dirname, '/client/build')));

// middleware referencja do - io
app.use((req, res, next) => {
  req.io = io;
  next();
});

// import routes
const testimonialsRoutes = require('./routes/testimonials.routes');
const concertsRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');

// endpointS
app.use('/api', testimonialsRoutes);
app.use('/api', concertsRoutes);
app.use('/api', seatsRoutes);

// build/index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});


// connects backend code with the database
// polaczenie z DB za pomoca Mongoose z podzialem na tryby servera
const NODE_ENV = process.env.NODE_ENV;
let dbUri = '';
const user = process.env.userName;
const password = process.env.userPassword;

if (NODE_ENV === 'production') dbUri = 'mongodb+srv://' + user + ':' + password + '@ggcluster.3bhz4.mongodb.net/ConcertAPI?retryWrites=true&w=majority';
else if (NODE_ENV === 'test') dbUri = 'mongodb://localhost:27017/NewWaveDBtest';
else dbUri = 'mongodb://localhost:27017/NewWaveDB';

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
  // console.log('Connected to the database');
});
db.on('error', err => console.log('Error ' + err));

app.use((req, res) => {
  res.status(404).send('404 not found...');
});

// proces.env.PORT - pozwala na pobieranie wartosci portu serwera
// https://qa-stack.pl/programming/15693192/heroku-node-js-error-web-process-failed-to-bind-to-port-within-60-seconds-of

const host = '0.0.0.0';
const port = process.env.PORT || '8000';

const server = app.listen(port, host, () => {
  console.log('Server is running on port: ', port);
});

const io = socket(server);

io.on('connection', (socket) => {
  console.log('New socket!!!!');
  app.set('socket', socket);
});


module.exports = server;