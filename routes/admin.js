var express = require('express');
var Reservation = require('../models/reservation')
var router = express.Router();
var moment = require('moment');
var today = moment().format('L');

router.get('/', function (req, res) {
	var capCounter= 0;

   Reservation.find({date: today}, function (err, reservations) {
    var dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    for (i=0;i<reservations.length;i++){
    capCounter= capCounter + reservations[i].partyNum;
	}
    res.render('admin/index', {reservations: reservations, dateTime: dateTime, capCounter: capCounter});
   });

});

module.exports = router;