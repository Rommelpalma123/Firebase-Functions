const {getFirestore} = require("firebase-admin/firestore");
const {getAuth} = require("firebase-admin/auth");

const {generateRamdonPassword} = require("../utils/generatePassword");
const {sendWelcomeMail} = require("../utils/email");

const {COLLECTIONS_NAME, MESSAGES} = require("../constants");

const createDriver = async (data) => {
  try {
    const {name, lastname, email} = data;

    const password = generateRamdonPassword();

    const {uid} = await getAuth().createUser({email, password});

    await getFirestore()
        .collection(COLLECTIONS_NAME.user)
        .doc(uid)
        .set(data);

    await sendWelcomeMail(email, name + " " + lastname, password);

    return {message: MESSAGES.driverSuccess, success: true};
  } catch (error) {
    return {message: MESSAGES.driverFailure, success: false};
  }
};

module.exports = {
  createDriver,
};
