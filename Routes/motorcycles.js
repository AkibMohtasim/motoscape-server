const express = require('express');
const router = express.Router();
const Motorcycle = require('../Models/Motorcycles');




// ------------------ motorcycle section ----------------

router.get('/', async (req, res) => {
  const brand = req.query.brand;
  const category = req.query.category;
  const pageNumber = req.query.pageNumber;
  const pageSize = req.query.pageSize;

  let query = {};

  if (brand) {
    query = { brand }
  }
  if (category) {
    query = { category }
  }

  const count = await Motorcycle
    .find(query)
    .count();

  const motorcycles = await Motorcycle
    .find(query)
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize);

  res.send({ count, motorcycles });
})

router.post('/', async (req, res) => {
  const motorcycleBody = req.body;
  const newMotorcycle = new Motorcycle(motorcycleBody);
  const result = await newMotorcycle.save();
  res.send(result);
})


router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const motorcycle = await Motorcycle.findById(id);
  res.send(motorcycle);
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const deletedMotorcycle = await Motorcycle.findByIdAndDelete(id);
  res.send(deletedMotorcycle);
})



module.exports = router;