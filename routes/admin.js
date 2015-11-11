var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();


router.get('/', function (req, res) {
    res.render('admin/index', { });
});

router.get('/register', function(req, res) {
    res.render('admin/register', { });
});

router.post('/register', function(req, res) {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;

    var newUser = User({
        username: username,
        email: email,
        password: password
    });

    newUser.save(function(err) {
        if (err) console.log(err);
    });
    

    res.redirect('/authenticate', {user : req.user });
});

router.post('/authenticate', function(req, res) {


    res.redirect('/', {user: req.user})
});

router.get('/login', function(req, res) {
    res.render('admin/login', { user : req.user });
});

router.post('/login', function(req, res) {
    res.redirect('/authenticate')
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;