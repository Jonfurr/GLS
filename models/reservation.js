
var mongoose = require('mongoose');

var reservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone_num: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  secret: { type: String, required: true },
  created_at: Date,
  updated_at: Date
});

reservationSchema.methods.confirmNum = function() {
  console.log(this.name + ' at ' + this.phone_num + ' made a reservation for ' + this.date + ' at ' + this.time);
};

var Reservation = mongoose.model('Reservation', reservationSchema);

// Make this available to our other files
module.exports = Reservation;