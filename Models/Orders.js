const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
  product_id: String,
  productName: String,
  price: Number,
  customerName: String,
  email: String,
  phone: String,
  date: String,
  address: String,
  message: String,
  status: String

},
  {
    collection: 'orders'
  }
);



const Order = mongoose.model('Order', orderSchema);


module.exports = Order;