const express = require('express');
const baseResponse = require('../models/baseresponse');
const categoryRepository = require('./category_repository');
const tokenValidator = require('../middlewares/token_validator');

const router = express.Router();

//Routes
router.get('/',getAllRecords);
router.get('/:id', getRecordByID);
router.post('/',tokenValidator(),insertRecord)
router.put('/',tokenValidator(),updateRecord)
router.delete('/:id',tokenValidator(),deleteRecord);


//Get All Record
async function getAllRecords(req, res, next) {
  try {
    const data = await categoryRepository.getAllRecords()
    baseResponse.success(req,res,data,200);
  } catch (error) {
    next(error);
  }
};
//Get Record Record By Id
async function getRecordByID(req, res, next) {
    try {
        const data = await categoryRepository.getRecordByID(req.params.id)
        baseResponse.success(req,res,data,200);
    } catch (error) {
        next(error);
    }
};

//Add New Record
async function insertRecord(req, res, next) {
    try {
        const data = await categoryRepository.insertRecord(req.body)
        baseResponse.success(req,res,data,201);
    } catch (error) {
        next(error);
    }
};
//Update Record
async function updateRecord(req, res, next) {
    try {
        const data = await categoryRepository.updateRecord(req.body)
        baseResponse.success(req,res,data,201);
    } catch (error) {
        next(error);
    }
};
//Delete Record Record By Id
async function deleteRecord(req, res, next) {
    try {
        const data = await categoryRepository.deleteRecordByID(req.params.id)
        baseResponse.success(req,res,data,200);
    } catch (error) {
        next(error);
    }
};

module.exports = router;