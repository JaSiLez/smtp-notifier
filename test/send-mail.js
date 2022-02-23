require('dotenv').config();
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.yourdomain.email",
  port: 587,
  secure: false,
  auth: {
    username: process.env.SMTP_USER
    password: smtpPassprocess.env.SMTP_PASSWORD
  }
});
// send mail with defined transport object
transporter.sendMail({
  from: '"YourCompany" <no-reply@yourdomain.com>', 
  to: "customer@example.com", 
  subject: "Test email", 
  text: "Hello world"
});