const express = require('express');
const baseResponse = require('../models/baseresponse');
const userRepository = require('./user_repository');
const tokenValidator = require('../middlewares/token_validator');

const router = express.Router();

//Routes
router.get('/',getAllUsers);
router.get('/:id',getUserByID);
router.post('/',insertUser)
router.put('/',updateUser)
router.delete('/:id',deleteUser);


//Get All Record
async function getAllUsers(req, res, next) {
  try {
    const data = await userRepository.getAllRecords()
    baseResponse.success(req,res,data,200);
  } catch (error) {
    next(error);
  }
};
//Get Record By Id
async function getUserByID(req, res, next) {
    try {
        const data = await userRepository.getRecordByID(req.params.id)
        baseResponse.success(req,res,data,200);
    } catch (error) {
        next(error);
    }
};

//Add New Record
async function insertUser(req, res, next) {
    try {
        const data = await userRepository.insertRecord(req.body)
        if(data.error){
            baseResponse.error(req,res,data.message,403);
        }else{
            baseResponse.success(req,res,data.message,201);
        }
       
    } catch (error) {
        next(error);
    }
};
//Update Record
async function updateUser(req, res, next) {
    try {
        
        const data = await userRepository.updateRecord(req.body)
        baseResponse.success(req,res,data,201);
    } catch (error) {
        next(error);
    }
};
//Delete Record By Id
async function deleteUser(req, res, next) {
    try {
        const data = await userRepository.deleteRecordByID(req.params.id)
        baseResponse.success(req,res,data,200);
    } catch (error) {
        next(error);
    }
};

module.exports = router;