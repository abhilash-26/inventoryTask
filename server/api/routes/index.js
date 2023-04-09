const router = require("express").Router();
const productRoute = require("./product.route");

router.get("/test", (req, res) => res.send("ok"));
router.use("/product", productRoute);

module.exports = router;
