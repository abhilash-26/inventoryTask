const express = require("express");
const { port } = require("../api/utils/vars");
const socket = require("socket.io");
const { socketConnect } = require("./socket");

require("dotenv");
const app = express();

app.use(express.json());

// if (process.env.NODE_ENV == "production") {
//   app.use(express.static("client/build"));
// }

const server = app.listen(port, () => {
  console.log(`app running on port ${port}`);
});

let io = socket(server, {
  cors: {
    origin: "*",
  },
});

global.io = io;

const socketConnection = io.on("connection", (socket) => {
  console.log("connection established");
  socketConnect({ io, socket });
});

module.exports = socketConnection;

module.exports = app;
