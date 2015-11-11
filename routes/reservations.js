var express = require('express');
var router = express.Router();
var Reservation = require('../models/reservation');
var accountSid = process.env.TWILIO_ACCOUNT_SID; 
var authToken =  process.env.TWILIO_AUTH_TOKEN; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
var moment = require('moment');
/* GET reservations listing. */
router.get('/new', function(req, res, next) {
  res.render('reservations/new');
});

router.post('/new', function(req, res, next) {
    var name = req.body.name;
    var phone_num = '+1' + req.body.phone_num;
    var date = req.body.month.substring(0,2)+"/"+req.body.day+"/"+req.body.year;
    var time = req.body.hours+":"+req.body.minutes+"pm";

    var newReservation = Reservation({
        name: name,
        phone_num: phone_num,
        date: date,
        time: time
    });

    // Save the user
    newReservation.save(function(err) {
        if (err) console.log(err);
    });
    
    client.messages.create({
        from: "+18063293049",
        body: "Hello, "+newReservation.name+". Your reservation is confirmed for "+newReservation.date+" at "+newReservation.time+".",
        to: newReservation.phone_num
      }, function(err, data) {
        if (err) {
          console.error(err);
        } 
    });

    console.log(newReservation);
    res.redirect('/');
});
module.exports = router;
