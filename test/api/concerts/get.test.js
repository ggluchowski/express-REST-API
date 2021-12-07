const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../server.js');

const Concert = require('../../../models/concert.model');

chai.use(chaiHttp);

// skroty do metod
const expect = chai.expect;
const request = chai.request;

describe('GET /api/concerts', () => {

  before(async () => {
    const testDepOne = new Concert({ _id: '5d9f1140f10a81216cfd4408', id: 1, performer: 'John Doe', genre: 'Rock', price: 25, day: 1, image: '/img/uploads/1fsd324fsdg.jpg' });
    await testDepOne.save();

    const testDepTwo = new Concert({ _id: '5d9f1140f10a81216cfd4409', id: 2, performer: 'Jan Trabka', genre: 'R&B', price: 25, day: 1, image: '/img/uploads/2f342s4fsdg.jpg' });
    await testDepTwo.save();

    const testDepThree = new Concert({ _id: '5d9f1140f10a81216cfd4407', id: 3, performer: 'Szfagier band', genre: 'Pop', price: 40, day: 2, image: '/img/uploads/hdfh42sd213.jpg' });
    await testDepThree.save();
  });

  after(async () => {
    await Concert.deleteMany();
  });

  it('/performer/:performer should return one performer by varieble performer', async () => {
    const res = await request(server).get('/api/concerts/performer/John Doe');
    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body.length).to.not.be.null;
  });

  it('/genre/:genre should return all concerts in proper genre', async () => {
    const res = await request(server).get('/api/concerts/genre/Pop');
    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body.length).to.be.equal(1);
  });

  it('/price/:price_min/:_price_max should return concerts where price is lower than price_max and grater than price_min', async () => {
    const res = await request(server).get('/api/concerts/price/20/30');
    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body.length).to.not.be.null;
  });

  it('/day/:day should return concerts for the proper day', async () => {
    const res = await request(server).get('/api/concerts/day/1');
    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body.length).to.not.be.null;
  });

});