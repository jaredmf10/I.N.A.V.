import React, { Component } from 'react'
import Navbar from './Navbar'
import Mapview from './MapView'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Mapview/>
      </div>
    )
  }
}
