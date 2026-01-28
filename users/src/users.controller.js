const UsersController = async (app) => {
  app.get("/users", (_, res) => {
    res.status(200).json({ message: "Users API is running" });
  });

  app.post("/users", async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ message: "Name, email and password are required" });
    const user = await createUser({ name, email, password });
    res.status(200).json(user);
  });
};

export { UsersController };