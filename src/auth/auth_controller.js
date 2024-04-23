const express = require('express');
const baseResponse = require('../models/baseresponse');
const authRepository = require('./auth_repository');
const cors  = require('cors');
const router = express.Router();
router.use(cors());
//Routes
router.post('/login',userLogin);



//Get token
async function userLogin(req, res, next) {
    try {
        const token = await authRepository.login(req.body)
        baseResponse.success(req,res,token,200);
    } catch (error) {
        next(error);
    }
};


module.exports = router;