import express from "express";
import morgan from "morgan";

import { PaymentController } from "./modules/payment/payment.controller.js";
import { UsersController } from "./modules/users/users.controller.js";

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (_, res) => {
  res.send("Hello Woorld");
});

PaymentController(app);
UsersController(app);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});