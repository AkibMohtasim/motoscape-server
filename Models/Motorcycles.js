const mongoose = require('mongoose');



const detailsSchema = new mongoose.Schema({
  engineCapacity: String,
  maxPower: String,
  maxTorque: String,
  gearbox: String,
  frontTire: String,
  rearTire: String,
  frontBrakes: String,
  rearBrakes: String,
  display: String,
  seatHeight: String,
  fuelCapacity: String,
  wetWeight: String,
  serviceInterval: String
})

const motorcyclesSchema = new mongoose.Schema({
  brand: String,
  category: String,
  name: String,
  img: String,
  price: Number,
  offer: Boolean,
  details: detailsSchema
},

  {
    collection: 'motorcycles'
  }
)


const Motorcycle = mongoose.model('Motorcycle', motorcyclesSchema);

module.exports = Motorcycle;