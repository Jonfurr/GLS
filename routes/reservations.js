var express = require('express');
var router = express.Router();
var Reservation = require('../models/reservation');

/* GET reservations listing. */
router.get('/new', function(req, res, next) {
  res.render('reservations/new');
});

router.post('/new', function(req, res, next) {
    var name = req.body.name;
    var phone_num = req.body.phone_num;
    var date = req.body.date;
    var time = req.body.time;

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

    res.redirect('/');
});
module.exports = router;
