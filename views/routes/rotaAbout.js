const express = require("express");
const router = express.Router();
const path = require('path');

router.get('/', function (req, res) {
  res.render('index');
});

router.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname + '/about.html'));
});

module.exports = router;
