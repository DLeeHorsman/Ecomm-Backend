exports.success = function (req, res, dataMessage = '', status = 200) {
    res.status(status).send({
        error: false,
        status:status,
        data: dataMessage,
    });
}

exports.error = function (req, res, dataMessage = 'Internal Error', status = 500) {
    res.status(status).send({
        error: true,
        status:status,
        data: dataMessage,
    });
}