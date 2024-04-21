// const mysql = require('mysql');

// const dbConfig = {
//     host: 'localhost',
//     user: 'root',
//     password: 'r123',
//     database: 'ecommdb'
// };
// let dbConn;
// function connectMySQL() {
//     dbConn = mysql.createConnection(dbConfig);

//     dbConn.connect((err) => {
//         if (err) {
//             console.log('[db error]', err);
//             //setTimeout(connectMySQL,1000);
//         } else {
//             console.log('Connected to MySQL.');
//         }
//     });

//     dbConn.on('error', err => {
//         console.log('[db error]', err);
//         if (err.code === 'PROTOCOL_CONNECTION_LOST') {
//             connectMySQL();
//         } else {
//             throw err;
//         }
//     });

// }
// //Call for connection to the db
// connectMySQL();
// function getAllRecords(table) {
//     return new Promise((resolve, reject) => {
//         dbConn.query(`SELECT * FROM ${table}`, (error, result) => {
//             if (error) return reject(error);
//             resolve(result);
//         });
//     });
// }
// function getRecordByID(table, id) {
//     return new Promise((resolve, reject) => {
//         dbConn.query(`SELECT * FROM ${table} WHERE id = ${id}`, (error, result) => {
//             if (error) return reject(error);
//             resolve(result);
//         });
//     });
// }
// function insertRecord(table, recordObject) {
//     return new Promise((resolve, reject) => {
//         dbConn.query(`INSERT INTO ${table} SET ?`, recordObject, (error, result) => {
//             if (error) return reject(error);
//             resolve(result);
//         });
//     });
// }
// function updateRecord(table, recordObject) {
//     return new Promise((resolve, reject) => {
//         dbConn.query(`UPDATE ${table} SET ? WHERE id = ?`, [recordObject, recordObject.id], (error, result) => {
//             if (error) return reject(error);
//             resolve(result);
//         });
//     });
// }
// function deleteRecordByID(table, id) {
//     return new Promise((resolve, reject) => {
//         dbConn.query(`DELETE FROM ${table} WHERE id = ${id}`, (error, result) => {
//             if (error) return reject(error);
//             resolve(result);
//         });
//     });
// }
// function query(table, queryString) {

//     return new Promise((resolve, reject) => {
//         dbConn.query(`SELECT * FROM ${table} WHERE ?`, queryString, (error, result) => {
//             if (error) return reject(error);
//             resolve(result[0]);
//         });
//     });
// }
// function customQuery(queryString) {

//     return new Promise((resolve, reject) => {
//         dbConn.query(queryString, (error, result) => {
//             if (error) return reject(error);
//             resolve(result);
//         });
//     });
// }
// module.exports = {
//     getAllRecords,
//     getRecordByID,
//     insertRecord,
//     updateRecord,
//     deleteRecordByID,
//     query,
//     customQuery
// };
