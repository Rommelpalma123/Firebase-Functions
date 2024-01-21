const {setGlobalOptions} = require("firebase-functions/v2");
const {onRequest} = require("firebase-functions/v2/https");
const {onDocumentDeleted} = require("firebase-functions/v2/firestore");
const {initializeApp} = require("firebase-admin/app");
require("dotenv").config();

const {adminVerification} = require("./src/functions/adminVerification");
const {sendMailFunction} = require("./src/functions/sendMail");
const {deleteAuthenticationUser} =
require("./src/functions/deleteAuthenticationUser");
const {createDriver} = require("./src/functions/createDriver");

initializeApp();

setGlobalOptions({maxInstances: 10});

exports.AdminVerification = onRequest(async (req, res) => {
  const email = req.query.email;

  const response = await adminVerification(email);

  res.json(response);
});


exports.sendMail = onRequest(async (req, res) => {
  const data = req.body;

  const response = await sendMailFunction(data);

  res.json(response);
});

exports.deleteAuthenticationUser =
onDocumentDeleted("users/{userId}", async (event) => {
  const id = event.data.id;
  await deleteAuthenticationUser(id);
});

exports.createDriver = onRequest(async (req, res) => {
  const data = req.body;

  const response = await createDriver(data);

  res.json(response);
});
