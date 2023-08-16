const Product = require("../models/product.model");
const { sucessResponse, failResponse } = require("../utils/responseHandler");

exports.addproduct = async (req, res) => {
  try {
   /* #swagger.tags = ['Product']
           #swagger.description = 'Endpoint para adicionar um usuário.' */
    const { name, category, price, count } = req.body;
    if(!name){
      return res.send({msg:"failed"})
    }

    if (name.trim() && category.trim() && price && count) {
      const result = await Product.create({
        name,
        category,
        price,
        count,
      });

      // emit socker event
      global.io.emit("message", "New data added");

      return sucessResponse(res, result, 200, "Product added");
    }
    return res.status(404).send("no")
  } catch (error) {
    // return failResponse(res, null, 400, error.message);
    res.status(400).send(error.message)
  }
};

exports.getAllProduct = async (req, res) => {
  try {
   /* #swagger.tags = ['Product']
           #swagger.description = 'Endpoint para adicionar um usuário.' */
    const result = await Product.find();
    if (result.length > 0) {
      return sucessResponse(res, result, 200, "All products fetched");
    }
    return failResponse(res, null, 400, "No product found");
  } catch (error) {
    return failResponse(res, null, 400, error.message);
  }
};

exports.getSingleProduct = async (req, res) => {
  try {
    const { id } = req.query;
    const result = await Product.findById(id);
    if (result) {
      return sucessResponse(res, result, 200, "Product fetched");
    }
    return failResponse(res, null, 400, "No product found");
  } catch (error) {
    return failResponse(res, null, 400, error.message);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    /* #swagger.parameters['name1'] = { 
           in: 'header',
           required:true,
           description: 'parameter one',
    },
   */
    /* #swagger.parameters['name2'] = { 
           in: 'header',
           required:true,
           description: 'parameter two',
    },
   */
  /* #swagger.parameters['hhhhh'] = { 
           in: 'body',
           required:true,
           description: 'parameter two',
    },
   */
    // const { id, name, category, price, count } = req.body;
    const payload = req.body;
    // if (!id || !name || !category || !price || !count) {
    //   return failResponse(res, null, 400, "All fields are required");
    // }
    // const result = await Product.findByIdAndUpdate(
    //   id,
    //   {
    //     name,
    //     category,
    //     price,
    //     count,
    //   },
    //   { new: true }
    // );

    // // emit socket event
    // global.io.emit("message", "Product details modified");

    // return sucessResponse(res, result, 200, "Data updated");
  } catch (error) {
    return failResponse(res, null, 400, error.message);
  }
};

exports.removeProduct = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      return failResponse(res, null, 400, "No product found");
    }
    const result = await Product.findByIdAndDelete(id);

    //emit socket event
    global.io.emit("message", "Product removed");

    return sucessResponse(res, result, 200, "Product removed");
  } catch (error) {
    return failResponse(res, null, 400, error.message);
  }
};
