const express = require('express');
const config = require('./config');
const morgan = require('morgan');
const cors  = require('cors');
const bodyParser = require('body-parser');
const productController = require('./product/product_controller');
const userController = require('./user/user_controller');
const authController =require('./auth/auth_controller');
const categoryController = require('./category/category_controller');
const roleController =require('./roles/roles_controller');
const notificationController = require('./notifications/notification_controller');
const errors = require('./middlewares/errors');

const app = express();

//Middlewares
app.use(morgan('dev')); //Para listar todas las consultas en la consola
app.use(express.json()); //Para reconocer objetos JSON
app.use(express.urlencoded({extended:true}));
app.use(cors()); //Para permitir y manejar politicas de conexion entre distintos dominios
// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// Have Node serve the files for our built React app
//app.use(express.static(path.resolve(__dirname, '../client/build')));


//Configurations
app.set('3001', config.app.port);



//Define Routes
app.use('/api/product', productController);
app.use('/api/user', userController);
app.use('/api/auth',authController);
app.use('/api/category', categoryController);
app.use('/api/role',roleController);
app.use('/api/notification',notificationController);
app.use(errors);

module.exports = app;