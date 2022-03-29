const dbusers = require('../../assets/dbusers.json');
const UsersUtils = require('../utils/users');
const users = dbusers.results;

const maxResults = 250;

const _ = require('lodash');

const getAllUsers = () => {
  return users;
}

const getAllUsersFromIndex = (i, q) => {

  let page = parseInt(i);
  let userArray = users;

  if(q){
    userArray = getAllUsersWithSearch(q);
    console.log("passage", q);
  }
  
  let endPosition = Math.min(((page+1)*250) - 1, userArray.length)
  return userArray.slice(page*250, endPosition);
}

const getOneUser = (uuid) => {
  return _.find(users, (user) => user.login.uuid === uuid);
}

const getOneUserFromUsername = (username) => {
  return _.find(users, (user) => user.login.username === username);
}

const getSpecificNumbersOfUsers = (i) => {
  return users.slice(0, i);
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

const getUserGenderDataStats = () => {
  return _.countBy(users, 'gender');
}

const getUserCountryDataStats = () => {

  let countriesObj = _.countBy(users, 'location.country');
  countriesObj = Object.keys(countriesObj).map((key) => ({countryLabel: key, count: countriesObj[key]}));

  return _.sortBy(countriesObj, "count").reverse();
}

module.exports = { 
  getAllUsers,
  getAllUsersFromIndex, 
  getAllUsersWithSearch, 
  getTotalUsersCount, 
  getUserGenderDataStats, 
  getUserCountryDataStats ,
  getOneUser,
  getOneUserFromUsername,
  getSpecificNumbersOfUsers,
};