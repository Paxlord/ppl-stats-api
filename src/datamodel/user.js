const dbusers = require('../../assets/dbusers.json');
const users = dbusers.results;

const _ = require('lodash');

const getAllUsers = () => {

  return users[0];

}

module.exports = getAllUsers;