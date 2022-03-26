const dbusers = require('../../assets/dbusers.json');
const users = dbusers.results;

const _ = require('lodash');

const getAllUsers = () => {
  return users;
}

const getAllUsersFromIndex = (i) => {
  return _.drop(users, i);
}

const getAllUsersWithSearch = (q) => {

  console.log(q);

}

module.exports = { getAllUsers, getAllUsersFromIndex, getAllUsersWithSearch };