const express = require('express');
const router = express.Router();
const UserDataModel = require('../datamodel/user');


router.get('/', (req, res) => {
  res.send(JSON.stringify(UserDataModel.getAllUsers()));
});

router.get('/filter', (req, res) => {
  
});

module.exports = router;