import React, { Component } from 'react'
import Navbar from './Navbar'
import MapView from './MapView'
// import 'semantic-ui-css/semantic.min.css'


export default class App extends Component {
  state = {
    destinations: null
  }

  componentDidMount() {
    fetch("http://localhost:3000/destinations")
      .then(resp => resp.json())
      .then(data => this.setState({ destinations: data }))
  }

  render() {
    // console.log(this.state.destinations)
    return (
      <div>
        <Navbar/>
        <MapView continents={this.state.destinations} />
      </div>
    )
  }
}
