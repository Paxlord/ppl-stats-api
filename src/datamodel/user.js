const dbusers = require('../../assets/dbusers.json');
const UsersUtils = require('../utils/users');
const users = dbusers.results;

const maxResults = 250;

const _ = require('lodash');

const getAllUsers = () => {
  return users;
}

const getAllUsersFromIndex = (i) => {
  let endPosition = Math.min((i+250) - 1, users.length);
  return users.slice(i, endPosition);
}

const getAllUsersWithSearch = (q) => {

  console.log(q);

}

module.exports = { getAllUsers, getAllUsersFromIndex, getAllUsersWithSearch };