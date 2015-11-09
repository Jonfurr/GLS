// /models/user.js
var mongoose = require('mongoose');

var reservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone_num: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  created_at: Date,
  updated_at: Date
});

var Reservation = mongoose.model('Reservation', reservationSchema);

// Make this available to our other files
module.exports = Reservation;