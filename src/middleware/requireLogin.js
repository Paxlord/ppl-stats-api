const requireLogin = (req, res, next) => {

  let loggedIn = req.loggedIn;

  if(!loggedIn){
    res.status(401);
    res.send("Unauthenticated");
    return;
  }

  next();

}

module.exports = requireLogin;