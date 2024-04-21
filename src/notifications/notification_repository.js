const EmailService = require('./email_service');

function sendOrderConfirmation(payload){
    try {
        EmailService.sendOrderConfirmation(payload)
        return 'Email sent successfully.'
    } catch (error) {
        console.log(error)
    } 
     
}
function sendWelcomeEmail(user){
    try {
        EmailService.sendWelcomeEmail(user)
        return 'Email sent successfully.'
    } catch (error) {
        console.log(error)
    }
     
}


module.exports = {
    sendOrderConfirmation,
    sendWelcomeEmail
}