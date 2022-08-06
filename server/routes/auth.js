const router = require("express").Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PAS_SEC
    ).toString(),
  });
  try {
    const saveUser = await newUser.save();
    res.status(201).send(saveUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    if (!user) {
      res.status(401).send("User not found");
    }
    const HashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PAS_SEC
    ).toString(CryptoJS.enc.Utf8);

    if (HashedPassword !== req.body.password) {
      res.status(401).send("Password is incorrect");
    }
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch {
    (error) => {
      res.status(500).json(error);
    };
  }
});
module.exports = router;
