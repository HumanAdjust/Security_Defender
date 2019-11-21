var express = require('express');
var db = require('../models/DB');
var router = express.Router();

router.get('/', function(req, res){
    res.render('../views/index.ejs');
});

module.exports = router;