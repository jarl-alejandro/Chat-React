'use strict'

import http from 'http'

import App from './lib'
import Chat from './lib/chat'

const server = http.createServer()
const port = process.env.PORT || 3000
const chatReact = new App({})

server.on("request", chatReact.app)
server.on("listening", onListen)
server.listen(port)
const chat = new Chat({ server:server })

function onListen(){
  console.log(`Servidor en http://localhost:${port}`)
}
