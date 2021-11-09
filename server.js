const express = require('express');
const path = require('path');

const { response } = require('express');

const db = require('./db/db');
// ewentualnie cors https://www.npmjs.com/package/cors

const app = express();
app.use(express.urlencoded({ extended: false })); //umozliwienie obslugi formularzy x-www-form-urlencoded
app.use(express.json());

// import routes
const testimonialsRoutes = require('./routes/testimonials.routes');
const concertsRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');

// endpoints
app.get('/', (req, res) => {
  res.send('Serwer działa');
});

app.use('/api', testimonialsRoutes);
app.use('/api', concertsRoutes);
app.use('/api', seatsRoutes);


app.use((req, res) => {
  res.status(404).send('404 not found...');
})
app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});