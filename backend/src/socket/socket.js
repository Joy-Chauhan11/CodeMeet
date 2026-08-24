import {Server, Socket} from "socket.io"

let io;
export function initializeSocket(server){
    io = new Server(server,{
cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
    },
    })

    io.on("connection",(socket)=>{
        console.log("socket connected",socket.id);

    socket.on("join-room",({roomId})=>{

        const roomSockets = io.sockets.adapter.rooms.get(roomId);
        const roomSize = roomSockets ? roomSockets.size : 0;

        if(roomSize>=2){
            console.log("working");
            socket.emit("room-full",{
                msg : "Current Room Is Full"
            }
        )
        return ;
        }
                socket.join(roomId);
                socket.roomId = roomId;

        console.log(`User ${socket.id} joined room :${roomId}`);
       socket.on("ready", ({ roomId }) => {

    socket.to(roomId).emit("peer-ready");

});
    })
   
socket.on("send-message", ({ roomId, message, sender }) => {
    console.log("Received:", message);

    console.log("Sending to room:", roomId);

    io.to(roomId).emit("receive-message", {
        sender,
        message,
        createdAt: new Date(),
    });

    console.log("Message emitted");
});
socket.on("offer", ({ roomId, offer }) => {
  socket.to(roomId).emit("receive-offer", {
    offer,
  });
});

socket.on("answer", ({ roomId, answer }) => {
    socket.to(roomId).emit("receive-answer", {
        answer,
    });
});

// socket.on("receive-offer", async ({ offer }) => {

//     console.log("Offer Received");

//     await peerConnection.current.setRemoteDescription(offer);

//     await createAnswer();

// });
socket.on("ice-candidate", ({ roomId, candidate }) => {
    socket.to(roomId).emit("receive-ice-candidate", {
        candidate,
    });
});

socket.on("code-change",({roomId , code})=>{
    socket.to(roomId).emit("new-code",{
        newCode :code
    })
})

socket.on("language-change", ({ roomId, language }) => {
  socket.to(roomId).emit("receive-language", {
    language,
  });
});

socket.on("onCode-change",({roomId , position})=>{
    socket.to(roomId).emit("recieve-position",{
        position
    })
})

       socket.on("disconnect", () => {
  console.log("socket disconnected:", socket.id);

  if (socket.roomId) {
    socket.to(socket.roomId).emit("peer-left");
  }
});
    });


}

export {io};