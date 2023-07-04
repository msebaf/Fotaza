var express = require('express');
const passport = require('passport');
const bcrypt = require("bcrypt");
const {usuario} = require("../models")
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session.user)
  res.render('principal', { title: 'Express' });
});

module.exports = router;
