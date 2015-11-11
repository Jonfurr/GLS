var express = require('express');
var router = express.Router();
var Reservation = require('../../models/reservation');
var moment = require('moment');
var today = moment().format('L');


// Get all reservations in JSON
router.get('/', function(req, res, next) {
	Reservation.find(function(err, reservations) {
  	if (err) return console.error(err);
	res.json(reservations);
	});
});

// Get todays reservations in JSON
router.get('/today', function(req, res, next) {
	Reservation.find({date: today}, function (err, reservations) {
    res.json(reservations);
   });
});

module.exports = router;