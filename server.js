const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.urlencoded({ extended: false })); //umozliwienie obslugi formularzy x-www-form-urlencoded
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
}
));

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