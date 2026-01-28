import axios from "axios";

const UsersController = async (app) => {
  app.get("/users", async (_, res) => {
    const response = await axios.get("http://localhost:3002/users")
    res.status(response.status).json(response.data);
  });

  app.post("/users", async (req, res) => {
    const response = await axios.post("http://localhost:3002/users", req.body)
    res.status(response.status).json(response.data);
  });
};

export { UsersController };