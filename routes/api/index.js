var express = require('express');
var router = express.Router();
var Reservation = require('../../models/reservation');

// Get all reservations in JSON
router.get('/', function(req, res, next) {
	Reservation.find(function(err, reservations) {
  	if (err) return console.error(err);
	res.json(reservations);
	});
});

module.exports = router;