'use strict'

import React from 'react'

class Form extends React.Component{

  constructor(props){
    super(props)
    this.socket = io()
  }

  render(){
    return(
      <div className="wrapper__form">
        <form className="form">
          <input type="text" ref="name" placeholder="Escribe tu nombre" className="form__name" />
          <textarea ref="mensaje" placeholder="Escribe tu mensaje" className="form__message"></textarea>
          <input type="submit" value="+" className="form__btn" onClick={ this.onClick.bind(this) } />
        </form>
      </div>
    )
  }

  onClick(event){
    event.preventDefault()
    let data = {
      name : this.refs.name.getDOMNode().value,
      mensaje : this.refs.mensaje.getDOMNode().value
    }
    this.socket.emit("emit::mensaje", data)

    this.refs.name.getDOMNode().value = ""
    this.refs.mensaje.getDOMNode().value = ""
  }

}

export default Form
