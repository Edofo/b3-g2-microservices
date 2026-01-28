import axios from "axios";

const PaymentController = async (app) => {
  app.get("/payment", async (_, res) => {
    const response = await axios.get("http://localhost:3001/payment")
    res.status(response.status).json(response.data);
  });

  app.post("/payment/buy-credit", async (req, res) => {
    const response = await axios.post("http://localhost:3001/payment/buy-credit", req.body)
    res.status(response.status).json(response.data);
  });
};

export { PaymentController };