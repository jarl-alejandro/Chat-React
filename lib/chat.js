'use strict'

import IO from "socket.io"

class Chat{

  constructor(config){
    config = config || {}
    const io = IO.listen(config.server)

    io.on("connection", (socket)=>{
      socket.on("emit::mensaje", emitMensaje)
    })

    function emitMensaje(data){
      io.emit("nuevo::mensaje", data)
    }

  }//fin del constructor
}



export default Chat
