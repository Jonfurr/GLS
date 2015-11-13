var express = require('express');
var router = express.Router();
var Reservation = require('../models/reservation');
var moment = require('moment');
var today = moment().format('L');
var accountSid = process.env.TWILIO_ACCOUNT_SID; 
var authToken =  process.env.TWILIO_AUTH_TOKEN; 
 
var client = require('twilio')(accountSid, authToken); 
var moment = require('moment');


router.get('/new', function(req, res, next) {
    var capCounter= 0;
        if (capCounter >= 65) {
            res.render('reservations/new', {error: "I'm sorry, we are booked at that time. Please try a different time or date."})
        } else {
    res.render('reservations/new',{error:''});
        }
   });

router.post('/new', function(req, res, next) {
    var secretArray = ['GLS', 'Green Light Social','GA WDI'];
    var name = req.body.name;
    var phone_num = '+1' + req.body.phone_num;
    var date = req.body.month.substring(0,2)+"/"+req.body.day+"/"+req.body.year;
    var time = req.body.hours+":"+req.body.minutes+"pm";
    var secret = secretArray[Math.floor(Math.random()*secretArray.length)];
    var partyNum = req.body.partyNum;
    var newReservation = Reservation({
        name: name,
        phone_num: phone_num,
        date: date,
        time: time,
        secret: secret,
        partyNum: partyNum
    });

    newReservation.save(function(err) {
        if (err) console.log(err);
    });
    
    client.messages.create({
        from: "+18063293049",
        body: "Hello, "+newReservation.name+". You have a reservation for " +newReservation.partyNum+ " on "+newReservation.date+" at "+newReservation.time+". Your password is " + newReservation.secret + ".",
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
