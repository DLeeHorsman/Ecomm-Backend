const express = require('express');
const baseResponse = require('../models/baseresponse');
const productRepository = require('./product_repository');
const tokenValidator = require('../middlewares/token_validator');

const router = express.Router();

//Products Routes
router.get('/',getAllProducts);
router.get('/mostwanted',getMostWantedProducts)
router.get('/:id', getProductsByID);
router.post('/',insertProduct)
router.put('/',updateProduct)
router.put('/updateqty',updateProductQuantity)
router.delete('/:id',deleteProductsByID);


//Get All Record
async function getAllProducts(req, res, next) {
  try {
    const productsData = await productRepository.getAllProducts()
    baseResponse.success(req,res,productsData,200);
  } catch (error) {
    next(error);
  }
};
//Get Product Record By Id
async function getProductsByID(req, res, next) {
    try {
        const productsData = await productRepository.getProductByID(req.params.id)
        baseResponse.success(req,res,productsData,200);
    } catch (error) {
        next(error);
    }
};

//Get Most Wanted Record
async function getMostWantedProducts(req, res, next) {
    try {
      const productsData = await productRepository.customQuery(`SELECT * FROM ecommdb.product order by view_qty desc limit 3;`)
      baseResponse.success(req,res,productsData,200);
    } catch (error) {
      next(error);
    }
  };

//Add New Product
async function insertProduct(req, res, next) {
    try {
        const productsData = await productRepository.insertProduct(req.body)
        baseResponse.success(req,res,productsData,201);
    } catch (error) {
        next(error);
    }
};
//Update Product
async function updateProduct(req, res, next) {
    try {
        const productsData = await productRepository.updateProduct(req.body)
        baseResponse.success(req,res,productsData,201);
    } catch (error) {
        next(error);
    }
};
//Delete Product Record By Id
async function deleteProductsByID(req, res, next) {
    try {
        const productsData = await productRepository.deleteProductByID(req.params.id)
        baseResponse.success(req,res,productsData,200);
    } catch (error) {
        next(error);
    }
};
async function updateProductQuantity(req, res, next) {
    const ptu = req.body
    //console.log(ptu);
    ptu.forEach(async element => {
        try {
            const productsData = await productRepository.customQuery(`UPDATE ecommdb.product SET ${element.size.id} = ${element.size.id} - ${element.quantity} WHERE id = ${element.id} ;`)
            console.log(productsData);
            //baseResponse.success(req,res,productsData,200);
          } catch (error) {
            console.log(error);
            next(error);
          }
    });
   
  };

module.exports = router;