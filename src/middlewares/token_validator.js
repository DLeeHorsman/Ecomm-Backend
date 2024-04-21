const auth = require('../auth/token_service');

module.exports = function tokenValidator(){
    function checkTokenMiddleware(req, res, next){
        const id = req.body.id;
        auth.checkToken.tokenConfirmation(req, id);
        next();
    }
    return checkTokenMiddleware
}
