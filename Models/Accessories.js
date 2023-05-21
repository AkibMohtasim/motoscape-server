const mongoose = require('mongoose');


const accessoriesSchema = new mongoose.Schema({
  name: String,
  price: Number,
  img: String,
  description: String
},
  {
    collection: 'accessories'
  }
);



const Accessory = mongoose.model('Accessory', accessoriesSchema);


module.exports = Accessory;