const router = require("express").Router();
const productRoute = require("./product.route");
const userRoute = require("./user.route");
const oAuthRoute = require("./oauth");

const multer = require("multer");

const storage = multer.memoryStorage({
  destination: function (req, file, callback) {
    callback(null, "");
  },
});

const upload = multer({
  storage,
  // limits: {
  //   fieldNameSize: 300,
  //   // fileSize: 52428800, // 50 Mb
  // },
}).array("image");

router.get("/test", (req, res) => res.status(400).send("ok"));
router.post("/upload", upload, (req, res) => {
  console.log(req.files);
});

router.use("/product", productRoute);
router.use("/user", userRoute);
router.use("/oauth", oAuthRoute);

module.exports = router;

// console.log("test");
