const express = require('express');
const router = express.Router();

const db = require("../config/mydb.js");

router.get('/login', function (req, res, next) {
    res.send('hello world!')
})

module.exports = router