const _ = require('lodash');

const filterUsersByName = (users, name) => {
  return _.filter(users, (user) => `${user.name.first} ${user.name.last}`.contains(name));
}

const filterUsersByCity = (users, city) => {
  return _.filter(users, (user) => user.location.city.contains(city));
}

const filterUsersByPhone = (users, phone) => {
  return _.filter(users, (user) => user.phone.contains(phone));
}

const filterUsersByGender = (users, gender) => {
  return _.filter(users, (user) => user.gender.contains(gender));
}

const filterUsersByState = (users, state) => {
  return _.filter(users, (user) => user.location.state.contains(state));
}

module.exports = {
  filterUsersByCity,
  filterUsersByGender,
  filterUsersByName,
  filterUsersByPhone,
  filterUsersByState
}
