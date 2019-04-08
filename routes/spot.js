const express = require('express');
const router = express.Router();
const Spot = require('../models/spot');
const mongoose = require('mongoose')


router.get("/", (req, res, next) => {
  res.json("hi");
  res.status(200)
})


module.exports = router;