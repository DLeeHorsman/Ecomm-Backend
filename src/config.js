require('dotenv').config();

module.exports = {
    app: {
        port: process.env.PORT || 3306,
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || 'r123',
        database: process.env.MYSQL_DB || 'ecommdb'
    },
    jwt: {
        secret: process.env.JWESECRET || 'secretAPIKEY'
    },
    email: {
        user: process.env.EMAILUSER,
        password: process.env.EMAILPASSWORD,
        host: process.env.EMAILHOST,
        port: process.env.EMAILPORT
    }
}