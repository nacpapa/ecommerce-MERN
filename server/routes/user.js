const router = require("express").Router();

router.get("/usertest", (req, res) => {
  res.send("User test success");
});

router.post("/userposttest", (req, res) => {
  const username = req.body.username;
  console.log(username);
  res.status(200).send("User post test success");
});
module.exports = router;
