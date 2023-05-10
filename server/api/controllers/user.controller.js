const User = require("../models/user.model");
exports.register = async (req, res) => {
  try {
    const { name, username, password } = req.body;
    const result = await User.create({
      name,
      username,
      password,
    });
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log("go");
    res.send("done");
  } catch (error) {
    console.log(error.message);
  }
};
