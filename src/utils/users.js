const _ = require('lodash');

const filterUsersByName = (users, name) => {

  return _.filter(users, (user) => `${user.name.first} ${user.name.last}`.toLowerCase().includes(name.toLowerCase()));
}

const filterUsersByCity = (users, city) => {
  return _.filter(users, (user) => user.location.city.toLowerCase().includes(city.toLowerCase()));
}

const filterUsersByPhone = (users, phone) => {
  return _.filter(users, (user) => user.phone.toLowerCase().includes(phone.toLowerCase()));
}

const filterUsersByGender = (users, gender) => {
  return _.filter(users, (user) => user.gender.toLowerCase().includes(gender.toLowerCase()));
}

const filterUsersByState = (users, state) => {
  return _.filter(users, (user) => user.location.state.toLowerCase().includes(state.toLowerCase()));
}

module.exports = {
  filterUsersByCity,
  filterUsersByGender,
  filterUsersByName,
  filterUsersByPhone,
  filterUsersByState
}
