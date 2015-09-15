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
        <h3 className="no__hay">No hay mensajes</h3>
      )
    }
    return(
      <ul className="mensaje__list">
        {
          this.state.messages.map((mensaje, index)=>{
            return(
              <li key={ index } className="message__item">
                <List name={ mensaje.name } mensaje={ mensaje.mensaje } />
              </li>
            )
          })
        }
      </ul>
    )
  }

}

export default Listas
