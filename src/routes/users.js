const express = require('express');
const router = express.Router();
const UserDataModel = require('../datamodel/user');


router.get('/', (req, res) => {
  res.send(JSON.stringify(UserDataModel.getAllUsers()));
});

router.get('/pagination/:i', (req, res) => {
  res.send(JSON.stringify(UserDataModel.getAllUsersFromIndex(req.params.i)));
});

router.get('/filter', (req, res) => {
  
  let q = req.query;
  res.send(UserDataModel.getAllUsersWithSearch(q));

});

module.exports = router;