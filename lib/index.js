'use strict'

import path from 'path'
import express from 'express'
import swig from 'swig'
import router from './router'

class App{

  constructor(config){
    config = config || {}

    this.app = express()

    this.app.use(router)
    this.app.use(express.static(path.join( __dirname, "..", "public/dist" )))

    this.app.engine("html", swig.renderFile)
    this.app.set("view engine", "html")
    this.app.set("views", path.join(__dirname, "..", "views"))
  }

}

export default App
