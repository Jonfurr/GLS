var express = require('express');
var router = express.Router();
var Reservation = require('../models/reservation');
var accountSid = 'AC58210635483a01f223a06b0950eaf234'; 
var authToken = 'ed903dc4962704bd499aa681fe294f5f'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
// var twilio = require('twilio');
// var twilioSID = process.env.TWILIO_ACCOUNT_SID;
// var twilioAuthToken = process.env.TWILIO_AUTH_TOKEN
// var client = require('twilio')(twilioSID, twilioAuthToken);
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
    to: newReservation.phone_num,
    body: "Hello, "+newReservation.name+". Your resevation is confirmed for "+newReservation.date+" at "+newReservation.time+"."    
}, function(err, message) { 
    console.log(message.sid); 
});

    console.log(newReservation);
    res.redirect('/');
});
module.exports = router;
