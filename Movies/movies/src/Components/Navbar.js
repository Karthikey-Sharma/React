import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div style = {{display : "flex" , background : "white" , color : "#2268FF", padding : "1rem" , justifyContent : "center" ,alignItems : "center"}}>
          <h1>Movies App</h1>
          <h1 style = {{marginLeft : "2rem"}}>Navbar</h1>
      </div>
    )
  }
}
