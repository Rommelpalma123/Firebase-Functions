const {getAuth} = require("firebase-admin/auth");

const deleteAuthenticationUser = async (id) => {
  await getAuth().deleteUser(id);
};

module.exports = {
  deleteAuthenticationUser,
};
