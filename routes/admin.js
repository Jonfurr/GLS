var express = require('express');
var Reservation = require('../models/reservation')
var router = express.Router();
var moment = require('moment');
var today = moment().format('L');

router.get('/', function (req, res) {

   Reservation.find({date: today}, function (err, reservations) {
    var dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log(reservations);
    res.render('admin/index', {reservations: reservations, dateTime: dateTime});
   });
});

module.exports = router;