const smtpUser = JSON.parse(process.env['SMTP_USER'])
const smtpPass = JSON.parse(process.env['SMTP_PASSWORD'])
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.yourdomain.email",
  port: 587,
  secure: false,
  auth: {
    user: smtpUser
    pass: smtpPass
  }
});
// send mail with defined transport object
transporter.sendMail({
  from: '"YourCompany" <no-reply@yourdomain.com>', 
  to: "customer@example.com", 
  subject: "Test email", 
  text: "Hello world"
});