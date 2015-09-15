'use strict'

import React from 'react'

class List extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="message__wrapper">
        <h3 className="mensaje__name">{ this.props.name }</h3>
        <p className="mensaje__msg">{ this.props.mensaje }</p>
      </div>
    )
  }

}


export default List
