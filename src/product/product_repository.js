const db = require('../services/mysql');

const productTable = 'product';

function getAllProducts(){
    return db.getAllRecords(productTable)
}
function getProductByID(id){
    return db.getRecordByID(productTable, id)
}
function insertProduct(body){
    return db.insertRecord(productTable, body)
}
function updateProduct(body){
    return db.updateRecord(productTable, body)
}
function deleteProductByID(id){
    return db.deleteRecordByID(productTable , id)
}
function customQuery(sqlSring){
    return db.customQuery(sqlSring);
}

module.exports = {
    getAllProducts,
    getProductByID,
    insertProduct,
    updateProduct,
    deleteProductByID,
    customQuery,
    updateProduct
}