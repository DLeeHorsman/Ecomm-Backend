const db = require('../services/mysql');
const bcrypt = require('bcrypt');
const tokenService = require('./token_service');
const error = require('../middlewares/errors');

const TABLE = 'auth';



//Login Function
async function login(body){
    try {
      const data = await db.query(TABLE,{username:body.username});
      const user = await db.getRecordByID('user',data.id);
      const match = await bcrypt.compare(body.password,data.password);
      console.log('Passwords match:', match);
      if(match){
        const token = tokenService.generateToken({...data});
        const usertoken ={
            user,
            token,
            username: body.username 
        }
        return usertoken;
      } else {
        throw error('Your Credential are invalid.')
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

//Insert Login Record
async function insertRecord(body){
    const authData = {
        id: body.id,
    }

    if(body.username) {
        authData.username = body.username
    }
    if(body.password) {
        authData.password = await bcrypt.hash(body.password.toString(),5);
    }
    return db.insertRecord(TABLE, authData);
}




module.exports = {
    insertRecord,
    login,
}