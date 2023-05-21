const express = require('express');
const router = express.Router();
const Order = require('../Models/Orders');




// ----------------- Order Section -----------------------

router.get('/', async (req, res) => {
  const orders = await Order.find().sort({ status: 1 });
  res.send(orders);
})

router.post('/', async (req, res) => {
  const orderBody = req.body;
  const newOrder = new Order(orderBody);
  const result = newOrder.save();
  res.send(result)
})


router.get('/findByemail', async (req, res) => {
  const query = req.query;
  const orders = await Order.
    find(query);
  res.send(orders);
})


router.put('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const updatedStatus = await Order.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          status: 'Shipped'
        }
      },
      { upsert: true, new: true }
    );

    const result = await updatedStatus.save();
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const deletedOrder = await Order.findByIdAndDelete(id);
  res.send(deletedOrder);
})




module.exports = router;