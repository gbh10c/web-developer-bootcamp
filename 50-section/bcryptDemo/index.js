const bcrypt = require('bcrypt');

// const hashPassword = async (pw) => {
//   const salt = await bcrypt.genSalt(12);
//   const hash = await bcrypt.hash(pw, salt);
//   console.log(salt);
//   console.log(hash);
// }

// SHORTER SYNTAX
const hashPassword = async (pw) => {
  const hash = await bcrypt.hash(pw, 12);
  console.log(hash);
}

const login = async(pw, hashedPw) => {
  const result = await bcrypt.compare(pw, hashedPw);
  if (result) {
    console.log('LOGGED YOU IN - SUCCESSFUL MATCH!')
  } else {
    console.log('INCORRECT PASSWORD');
  }
}

// hashPassword('password');

login('passwerd', '$2b$12$nzGf6bnUx.dKE6D7B8F7duQTeJ6O0gZL3Pmbiq/EgfqF7XJQpN106')