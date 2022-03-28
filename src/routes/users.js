const express = require('express');
const router = express.Router();
const UserDataModel = require('../datamodel/user');
const requireLogin = require('../middleware/requireLogin');

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

router.get('/count', (req, res) => {
  res.send(""+ UserDataModel.getTotalUsersCount());
});

router.get('/stats/gender', (req, res) => {
  res.send(UserDataModel.getUserGenderDataStats());
});

router.get('/stats/country', (req, res) => {
  res.send(UserDataModel.getUserCountryDataStats());
});

module.exports = router;