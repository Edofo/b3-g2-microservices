const buyCredit = async ({ amount }) => {
  return {
    amount,
    status: "success",
    message: "Credit bought successfully",
  };
};

export { buyCredit };