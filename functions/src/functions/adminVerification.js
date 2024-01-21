const {getFirestore} = require("firebase-admin/firestore");

const {sendVerficationAdminMail} = require("../utils/email");

const {ROLES_ID, COLLECTIONS_NAME, MESSAGES} = require("../constants");

const adminVerification = async (email) => {
  const data = await getFirestore()
      .collection(COLLECTIONS_NAME.user)
      .where("email", "==", email)
      .get();

  const user = data.docs[0];

  if (!user) {
    return {message: MESSAGES.nonUser, admin: false, success: false};
  }

  const id = user.id;

  const {name, lastname, roleId} = user.data();

  if (roleId !== ROLES_ID.admin) {
    return {message: MESSAGES.notAdmin, admin: false, success: true};
  }

  const code = Math.floor(Math.random() * 900000) + 100000;

  await getFirestore().collection(COLLECTIONS_NAME.user).doc(id).update({code});

  try {
    await sendVerficationAdminMail(email, name + " " + lastname, code);

    return {message: MESSAGES.adminSuccess, admin: true, success: true};
  } catch (error) {
    return {message: MESSAGES.adminFailure, admin: true, success: false};
  }
};

module.exports = {
  adminVerification,
};
