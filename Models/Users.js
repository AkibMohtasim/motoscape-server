const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: { type: String, default: 'User' }
},
  {
    collection: 'users'
  });


const User = mongoose.model('User', userSchema);


module.exports = User;