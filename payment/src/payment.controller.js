import { buyCredit } from "./payment.service.js";

const PaymentController = async (app) => {
  app.get("/payment", (_, res) => {
    res.status(200).json({ message: "Payment API is running" });
  });

  app.post("/payment/buy-credit", async (req, res) => {
    const { amount } = req.body;
    if (!amount) return res.status(400).json({ message: "Amount is required" });
    const credit = await buyCredit({ amount });
    res.status(200).json(credit);
  });
};

export { PaymentController };