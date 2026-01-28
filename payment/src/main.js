import express from "express";
import morgan from "morgan";
import { PaymentController } from "./payment.controller.js";

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

PaymentController(app);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});