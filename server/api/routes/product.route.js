const router = require("express").Router();
const controller = require("../controllers/product.controller");

router.post("/add-product", controller.addproduct);

router.get("/get-all-product", controller.getAllProduct);

router.get("/single-product", controller.getSingleProduct);

router.put("/update-product", controller.updateProduct);

router.delete("/remove-product", controller.removeProduct);

module.exports = router;
