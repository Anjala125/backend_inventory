const validate = (req, res, next) => {
  const { name, category, quantity } = req.body;

  if (!name || !category) {
    return res.status(400).json({
      message: "Name and category are required",
    });
  }

  if (quantity !== undefined && typeof quantity !== "number") {
    return res.status(400).json({
      message: "Quantity must be a number",
    });
  }

  next();
};

export default validate;