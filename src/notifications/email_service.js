const hbs = require('nodemailer-express-handlebars');
const nodemailer = require('nodemailer')
const path = require('path')
const error = require('../middlewares/errors');
const config = require('../config');

// initialize nodemailer
const transporter = nodemailer.createTransport({
    host: config.email.host,
    port: config.email.port,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: config.email.user,
        pass: config.email.password,
        
    },
  });
// point to the template folder
const handlebarOptions = {
    viewEngine: {
        partialsDir: path.resolve('./src/views/emails'),
        defaultLayout: false,
    },
    viewPath: path.resolve('./src/views/emails'),
    extName: ".handlebars",
};
// use a template file with nodemailer
transporter.use('compile', hbs(handlebarOptions))

function sendOrderConfirmation(payload){

    const mailOptions = {
        from: '"RADA T-Shirts Inc." <customersupport@radainc.com>', 
        template: "orderConfirmation", 
        to: payload.user.email,
        subject: `Your Order at RADA, ${payload.user.name}`,
        context: {
            user: payload.user,
            ordercart: payload.cart.orderCart,
            shipAddress: payload.cart.shipAddress,
            orderTotals:payload.cart.orderTotals
            },
        };
    return sendMail(mailOptions);
}

function sendWelcomeEmail(user){
    const mailOptions = {
        from: '"RADA T-Shirts Inc." <Rada@radainc.com>', // sender address
        template: 'welcomeEmail', // the name of the template file, i.e., email.handlebars
        to: user.email,
        subject: `Welcome to RADA, Alexis`,
        context: {
            name: user.name,
            company: 'Rada Inc'
            },
        };

    return sendMail(mailOptions);
}

async function sendMail(mailOptions){
    try {
        await transporter.sendMail(mailOptions);
    } catch (err) {
        console.log(`Nodemailer error sending email to ${mailOptions.to}`, err);
        throw error('Error sending email',401)
    }
}

module.exports = {
    sendOrderConfirmation,
    sendWelcomeEmail
   
}
