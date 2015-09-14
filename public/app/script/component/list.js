'use strict'

import React from 'react'

class List extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <h3>{ this.props.name }</h3>
        <p>{ this.props.mensaje }</p>
      </div>
    )
  }

}


export default List
