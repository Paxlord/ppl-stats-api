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

  let filteredUsers = _.clone(users);
  
  if(q.name)
    filteredUsers = UsersUtils.filterUsersByName(filteredUsers, q.name);
  
  if(q.city)
    filteredUsers = UsersUtils.filterUsersByCity(filteredUsers, q.city);

  if(q.gender)
    filteredUsers = UsersUtils.filterUsersByGender(filteredUsers, q.gender)

  if(q.state)
    filteredUsers = UsersUtils.filterUsersByState(filteredUsers, q.state)

  if(q.phone)
    filteredUsers = UsersUtils.filterUsersByPhone(filteredUsers, q.phone)

  
  return filteredUsers;

}

const getTotalUsersCount = () => {
  return users.length;
}

module.exports = { getAllUsers, getAllUsersFromIndex, getAllUsersWithSearch, getTotalUsersCount };