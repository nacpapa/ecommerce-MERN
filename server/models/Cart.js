const mongooose = require("mongoose");

const CartSchema = new mongooose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: { type: String, required: true },
        quantity: { type: Number, default: 1 },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongooose.model("Cart", CartSchema);
