const express = require('express');
const router = express.Router();
const Accessory = require('../Models/Accessories');


// --------------- Accessories Section ------------------ 

router.get('/', async (req, res) => {
  const accessories = await Accessory.find();
  res.send(accessories);
})

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const accessorie = await Accessory.findById(id);
  res.send(accessorie);
})

router.post('/', async (req, res) => {
  const accessoryBody = req.body;
  const newAccessory = new Accessory(accessoryBody);
  const result = await newAccessory.save();
  res.send(result);
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const deletedAccessory = await Accessory.findByIdAndDelete(id);
  res.send(deletedAccessory);
})

module.exports = router;