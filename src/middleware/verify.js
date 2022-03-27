const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {


    let authHeader = req.get('Authorization');

    if(!authHeader){
        req.loggedIn = false;
        return next();
    }

    let accessToken = authHeader.split(' ')[1]; // Bearer pokapokpokpekofpokzef

    if(!accessToken){
        req.loggedIn = false;
        return next();
    }

    let decodedToken;

    try{
        decodedToken = jwt.verify(accessToken, 'my_secret');
    }catch(e){        
        req.loggedIn = false;
        req.invalidToken = true;
        return next();
    }

    if(!decodedToken){
        req.loggedIn = false;
        return next();
    }

    req.loggedIn = true;
    req.user_id = decodedToken.uuid;
    return next();
}


module.exports = verifyToken;