const router = require("express").Router();
const productRoute = require("./product.route");
const userRoute = require("./user.route");

router.get("/test", (req, res) => res.send("ok"));
router.use("/product", productRoute);
router.use("/user", userRoute);

module.exports = router;
