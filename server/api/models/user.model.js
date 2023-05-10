const mongoose = require("mongoose");

const user = new mongoose.Schema(
  {
    name: String,
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", user);
