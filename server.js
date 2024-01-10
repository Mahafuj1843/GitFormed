import app from "./app.js"
import { connected } from './config/db.js'
import { Server } from "socket.io";

const PORT = process.env.PORT || 8081;

const host = app.listen(PORT, () => {
    connected();
    console.log(`Server is running at port ${PORT}`)
})

const io = new Server(host, {
    pingTimeout: 60000,
    cors: {
        origin: "http://localhost:5173"
    },
})

io.on("connection", (socket) => {
    console.log('connected to socket.io')

    socket.on("setup", (userData) => {
        socket.join(userData._id)
        socket.emit("connected")
    })

    socket.on("new pull", (newPullReqest) => {
        var repo = newPullReqest.repository
        if (!repo.watchers.length) return;

        repo.watchers.forEach((watcher) => {
            socket.in(watcher).emit("pull recieved", newPullReqest)
        })
    })

    socket.off("setup", () => {
        socket.leave(userData._id);
    });
});

