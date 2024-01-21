const generateRamdonPassword = (length = 8) => {
  const charset = "abcdefghijklmnopqrstvwxyzABCDEFGHIKLNOPQRSTUWXYZ012346789";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randonIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randonIndex);
  }

  return password;
};

module.exports = {
  generateRamdonPassword,
};
