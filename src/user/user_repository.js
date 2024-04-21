const db = require('../services/mysql');
const authRepository = require('../auth/auth_repository')

const TABLE = 'user';

function getAllRecords(){
    return db.getAllRecords(TABLE)
}
function getRecordByID(id){
    return db.getRecordByID(TABLE, id)
}
async function insertRecord(body){

    //Create new user object to split values user vs auth
    const newUser = {
        name: body.name,
        last_name: body.last_name,
        isactive:body.isactive,
        gender:body.gender,
        role_id: 3,       
        create_by:1,
        update_by:1,
    }

    var authResponse = {
        error: false,
        message: ''
    };

    //Validate for duplicate username to prevent insert
    const duplicate = await db.query('auth',{username:body.username})
    if(duplicate){
        if(duplicate.username === body.username){
            authResponse.error = true;
            authResponse.message = 'Username already exists.';
          }
    }else {
       
        //Insert User Record and get New Id
        try {
            const response = await db.insertRecord(TABLE, newUser);
            if(body.username || body.password){
                authResponse = await authRepository.insertRecord({
                    id:response.insertId,
                    username:body.username,
                    password:body.password
                })
                authResponse.error = false;
                authResponse.message = 'User created successfully.'
            // Rest of your code
            } 
        }
            catch (error) {
            console.error('Error inserting new user:', error);
          }
    //Validate object and insert into Auth Table.
   
    }

    return authResponse;
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