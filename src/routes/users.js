const express = require('express');
const router = express.Router();
const getAllUsers = require('../datamodel/user');


router.get('/', (req, res) => {
  res.send(JSON.stringify(getAllUsers()));
});

router.get('/filter', (req, res) => {
  
});

module.exports = router;