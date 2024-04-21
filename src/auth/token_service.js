const jwt = require('jsonwebtoken');
const config = require('../config');
const error = require('../middlewares/errors');



function generateToken(data) {
    return jwt.sign(data,config.jwt.secret);
}

function validateToken(token){

    return jwt.verify(token, config.jwt.secret);
}

const checkToken = {
    tokenConfirmation: function(req ,id){
      const decodeToken = tokenHeaderDecode(req);
    //   if(decodeToken !== id){
    //     throw error('You dont have privilage to make this action.',401)
    //   }
    }
}

function getToken(authorization){
    if(!authorization){
        throw error('No Token detected.',401)
    }
    if(authorization.indexOf('Bearer') === -1){
        throw error('Token format invalid.',401)
    }

    let token = authorization.replace('Bearer ','');
    return token
}

function tokenHeaderDecode(req){
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const tokenDecoded = validateToken(token);
   
    req.user = tokenDecoded;
    return tokenDecoded;
}

module.exports = {
    generateToken,
    checkToken,
}