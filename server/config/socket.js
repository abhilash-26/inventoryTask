const socketConnect = ({ io, socket }) => {
  const id = socket.id;
  console.log("connected");

  // socket.on("join", async ({}, useCallback) => {
  //   socket.emit("message", {
  //     user: "admin",
  //     text: "join message",
  //   });
  //   // socket.join(userdata.communityId);

  //   // useCallback;
  // });
};

module.exports = { socketConnect };
