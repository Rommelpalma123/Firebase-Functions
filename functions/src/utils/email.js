const nodemailer = require("nodemailer");

const {adminVerficacionTemplate} = require("../templates/adminVerification");
const {welcomeTemplate} = require("../templates/welcome");

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendMail = async (data) => {
  await transporter.sendMail(data);
};

const sendVerficationAdminMail = async (email, name, code) => {
  await transporter.sendMail({
    from: "Administrador busontimea@gmail.com",
    to: email,
    subject: "Verficación de Seguridad",
    html: adminVerficacionTemplate(name, code),
    priority: "high",
  });
};

const sendWelcomeMail = async (email, name, password) => {
  await transporter.sendMail({
    from: "Administrador busontimea@gmail.com",
    to: email,
    subject: "Bienvenid@ a Bus On Time",
    html: welcomeTemplate(email, name, password),
    priority: "high",
  });
};

module.exports = {
  sendMail,
  sendVerficationAdminMail,
  sendWelcomeMail,
};
