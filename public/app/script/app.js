'use strict'

import React from 'react'

import Header from './component/header'
import Form from './component/form'
import Listas from'./component/listas'

class App extends React.Component{

  constructor(props){
    super(props)
    this.socket = io()
  }

  render(){
    return(
      <div>
        <Header />
        <Form />
        <Listas />
      </div>
    )
  }
}

React.render(<App />, document.getElementById('chat'))

