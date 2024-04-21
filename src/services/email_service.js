const hbs = require('nodemailer-express-handlebars')
const nodemailer = require('nodemailer')
const path = require('path')

// initialize nodemailer
var transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth:{
            user: 'your_email@gmail.com',
            pass: 'password_for_your_email_address'
        }
    }
);

// point to the template folder
const handlebarOptions = {
    viewEngine: {
        partialsDir: path.resolve('./views/emails'),
        defaultLayout: false,
    },
    viewPath: path.resolve('./views/emails'),
};

// use a template file with nodemailer
transporter.use('compile', hbs(handlebarOptions))

//   for (const user of users) {
//     if (user.email) {
//       const mailOptions = {
//         from: '"RADA T-Shirts Inc." <my@company.com>', // sender address
//         template: "welcomeEmail.handlebars", // the name of the template file, i.e., email.handlebars
//         to: user.email,
//         subject: `Welcome to RADA, ${user.name}`,
//         context: {
//           name: user.name,
//           company: 'my company'
//         },
//       };
//       try {
//         await transporter.sendMail(mailOptions);
//       } catch (error) {
//         console.log(`Nodemailer error sending email to ${user.email}`, error);
//       }
//     }
//   }
