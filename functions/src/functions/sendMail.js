const {sendMail} = require("../utils/email");

const {MESSAGES} = require("../constants");

const sendMailFunction = async (data) => {
  const {from, to, subject, message, importance} = data;

  const mailOptions = {
    from: from || "Administrador " + process.env.EMAIL_USER,
    to: to || process.env.EMAIL_USER,
    subject: subject,
    html: message,
    priority: importance || "normal",
  };

  try {
    await sendMail(mailOptions);
    return {message: MESSAGES.emailSucces, success: true};
  } catch (error) {
    return {message: MESSAGES.emailFailure, success: false};
  }
};

module.exports = {
  sendMailFunction,
};
