const UsersDataModel = require('../datamodel/user');
const crypto = require('crypto');
const _ = require('lodash');
const jwt = require('jsonwebtoken');

const jwt_secret = 'my_secret';
const jwt_expiration = '1w';

const Login = (req, res) => {

  const username = req.query.username;
  const password = req.query.password;

  if(!username || !password)
    throw new Error('Authentication error');

  const user = UsersDataModel.getOneUserFromUsername(username);

  if(!user)
    throw new Error('Authentication error');

  const salt = user.login.salt;

  if(!salt)
    throw new Error('Authentication error');

  const saltedPassword = password + salt;
  const hashedPassword = crypto.createHash('sha256').update(saltedPassword).digest('hex');

  if(user.login.sha256 !== hashedPassword)
    throw new Error('Password not matching');

  const token = jwt.sign({ uuid: user.login.uuid}, jwt_secret, { expiresIn: jwt_expiration});

  res.cookie("token", token, { maxAge: 3*60*60*1000});
  res.end();

}

module.exports = Login;