import express from "express";
import morgan from "morgan";

import { UsersController } from "./users.controller.js";

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

UsersController(app);

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});