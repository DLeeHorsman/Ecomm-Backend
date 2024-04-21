const db = require('../services/mysql');

const TABLE = 'category';

function getAllRecords(){
    return db.getAllRecords(TABLE)
}
function getRecordByID(id){
    return db.getRecordByID(TABLE, id)
}
function insertRecord(body){
    return db.insertRecord(TABLE, body)
}
function updateRecord(body){
    return db.updateRecord(TABLE, body)
}
function deleteRecordByID(id){
    return db.deleteRecordByID(TABLE , id)
}

module.exports = {
    getAllRecords,
    getRecordByID,
    insertRecord,
    updateRecord,
    deleteRecordByID
}