var express = require('express');
var db = require('../models/DB');
var router = express.Router();

router.get('/', function(req, res){
    res.render('../views/index.ejs');
});

router.get('/login', function (req, res) {
    res.render('../views/login.ejs');
});

router.get('/stage', function (req, res) {
    res.render('../views/Stage.ejs');
});

module.exports = router;