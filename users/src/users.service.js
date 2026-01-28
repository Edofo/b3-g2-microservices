const createUser = async ({ name, email, password }) => {
  return {
    name,
    email,
    password,
  };
};

export { createUser };