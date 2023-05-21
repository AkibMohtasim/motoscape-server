const express = require('express');
const router = express.Router();
const Accessory = require('../Models/Accessories');


// --------------- Accessories Section ------------------ 

router.get('/', async (req, res) => {
  const accessories = await Accessory.find();
  res.send(accessories);
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const deletedAccessory = await Accessory.findByIdAndDelete(id);
  res.send(deletedAccessory);
})

module.exports = router;