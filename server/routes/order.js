const Order = require("../models/Order");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./Token");

const router = require("express").Router();

// CREATE Order

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    const saveOrder = await newOrder.save();
    res.status(200).send(saveOrder);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE ORDER
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        // AGARRAMOS TODO LO DEL BODY Y LO GUARDAMOS EN EL USUARIO
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE Order

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).send("Order deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
// GET Order

router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const orders = await Order.findById(req.params.id);
    res.status(200).json(Order);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL OrderS
router.get("/getall", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let orders;
    if (qNew) {
      orders = await Order.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      orders = await Order.find({ categories: { $in: [qCategory] } })
        .sort({ createdAt: -1 })
        .limit(5);
    } else {
      orders = await Order.find();
    }
    res.status(200).send(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET MONTHLY INCOME
router.get("/income", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      // FILTRA POR LOS MAYORES A LOS ULTIMOS 2 MESES
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        // LE PASA A LA PROXIMA INSTRUCCION SOLO EL MES DE CREADO Y SALES CON EL CAMPO AMOUNT
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
