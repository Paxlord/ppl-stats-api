const _ = require('lodash');

const filterUsersByName = (users, name) => {
  return _.filter(users, (user) => `${user.name.first} ${user.name.last}`.includes(name));
}

const filterUsersByCity = (users, city) => {
  return _.filter(users, (user) => user.location.city.includes(city));
}

const filterUsersByPhone = (users, phone) => {
  return _.filter(users, (user) => user.phone.includes(phone));
}

const filterUsersByGender = (users, gender) => {
  return _.filter(users, (user) => user.gender.includes(gender));
}

const filterUsersByState = (users, state) => {
  return _.filter(users, (user) => user.location.state.includes(state));
}

module.exports = {
  filterUsersByCity,
  filterUsersByGender,
  filterUsersByName,
  filterUsersByPhone,
  filterUsersByState
}
