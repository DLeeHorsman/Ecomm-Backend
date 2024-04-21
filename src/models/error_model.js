const baseResponse = require('./baseresponse');

function errors(err, req, res, next){
    console.error('[Error',err);
    const message = err.message || 'Internal Error';
    const status = err.statusCode || 500; 

    baseResponse.error(req, res, message, status);
}

module.exports = errors;