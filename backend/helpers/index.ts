const bycrypt = require("bcrypt");

const saltRounds = 10;

export const hashPassword = async (password: string): Promise<string> =>
  await bycrypt.hash(password, saltRounds);

export const checkPassword = async (
  givenPassword: string,
  dbPassword: string
): Promise<string> => {
  return await bycrypt.compare(givenPassword, dbPassword);
};
