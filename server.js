const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.urlencoded({ extended: false })); //umozliwienie obslugi formularzy x-www-form-urlencoded
app.use(express.json());
app.use(cors());
// serve static files from the React app
app.use(express.static(path.join(__dirname, '/client/build')));

// import routes
const testimonialsRoutes = require('./routes/testimonials.routes');
const concertsRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');

// endpoints
app.use('/api', testimonialsRoutes);
app.use('/api', concertsRoutes);
app.use('/api', seatsRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.use((req, res) => {
  res.status(404).send('404 not found...');
})
// proces.env.PORT - pozwala na pobieranie wartosci portu serwera
app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running on port: 8000');
});