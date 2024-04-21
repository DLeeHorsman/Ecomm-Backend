const express = require('express');
const baseResponse = require('../models/baseresponse');
const notificationRepository = require('./notification_repository');
const tokenValidator = require('../middlewares/token_validator');

const router = express.Router();

//Routes

router.post('/orderconfirmation',sendOrderConfirmation)
router.post('/welcomeemail',sendWelcomeEmail)


//sendOrder confirmation email
async function sendOrderConfirmation(req, res, next) {
    try {
        const data = await notificationRepository.sendOrderConfirmation(req.body)
        baseResponse.success(req,res,data,201);
    } catch (error) {
        next(error);
    }
};
async function sendWelcomeEmail(req, res, next) {
    try {
        const data = await notificationRepository.sendWelcomeEmail(req.body)
        baseResponse.success(req,res,data,201);
    } catch (error) {
        next(error);
    }
};

module.exports = router;