const express = require('express');
const router = express.Router();
const User = require('../Models/Users');



// -------------------- user section ---------------------

router.get('/', async (req, res) => {
  const users = await User.find().sort({ role: 1 });
  res.send(users);
})

router.post('/', async (req, res) => {
  const user = req.body;
  const newUser = new User(user);
  const result = await newUser.save();
  res.send(result);
})


// to confim whether a user is admin or not. Used in "useAdmin" hook.

router.get('/admin/:email', async (req, res) => {
  const email = req.params.email;
  const query = { email };
  const user = await User.findOne(query);
  // console.log({ isAdmin: user?.role === 'Admin' });
  res.send({ isAdmin: user?.role === 'Admin' });
})


router.put('/admin/:id', async (req, res) => {

  const id = req.params.id;

  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          role: 'Admin'
        }
      },
      { upsert: true, new: true }
    );

    const result = await updatedUser.save();
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }

})


module.exports = router;