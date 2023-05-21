const express = require('express');
const mongoose = require('mongoose');
const motorcycles = require('./Routes/motorcycles');
const accessories = require('./Routes/accessories');
const reviews = require('./Routes/reviews');
const orders = require('./Routes/orders');
const users = require('./Routes/users');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

require('dotenv').config();


app.use(express.json());
app.use(cors());




mongoose.set('strictQuery', true);

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kfezusn.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;


mongoose.connect(uri)
  .then(console.log('connected to mongodb atlas'))
  .catch(err => console.error(err.message));



app.get('/', (req, res) => {
  res.send('Hello!!')
})


app.use('/api/reviews', reviews);
app.use('/api/motorcycles', motorcycles);
app.use('/api/users', users);
app.use('/api/accessories', accessories);
app.use('/api/orders', orders);



app.listen(port, () => {
  console.log('Server running at port ', port);
})