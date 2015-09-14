'use strict'

import React from 'react'

import List from './list'

class Listas extends React.Component{

  constructor(props){
    super(props)
    this.socket = io()
    this.state = { messages:[] }
  }

  componentDidMount(){

    this.socket.on("nuevo::mensaje", (data)=>{
      let { messages } = this.state
      messages.push(data)
      this.setState({ messages:messages })
    })
  }

  render(){

    if(!this.state.messages.length){
      return(
        <h1>No hay elemento que mostar</h1>
      )
    }
    return(
      <ul>
        {
          this.state.messages.map((mensaje, index)=>{
            return(
              <List key={ index } name={ mensaje.name } mensaje={ mensaje.mensaje } />
            )
          })
        }
      </ul>
    )
  }

}

export default Listas
