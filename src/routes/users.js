const express = require('express');
const router = express.Router();
const UserDataModel = require('../datamodel/user');
const requireLogin = require('../middleware/requireLogin');

router.get('/', (req, res) => {
  let q = req.query;
  res.send((UserDataModel.getAllUsers()));
});

router.get('/pagination/:i', (req, res) => {
  let q = req.query;
  res.send((UserDataModel.getAllUsersFromIndex(req.params.i, q)));
});

router.get('/:id'), (req, res) => {
  res.send(UserDataModel.getOneUser(req.params.id));
}

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

router.get('/localisations', (req, res) => {
  res.send(UserDataModel.getSpecificNumbersOfUsers(100));
});

module.exports = router;