import React, { Component } from 'react'
import Navbar from './Navbar'

class USA extends Component {
  state = {
    name : "USA",
    destinations : []
  }

  componentDidMount(){
    fetch('http://localhost:3000/destinations')
    .then(res => res.json())
    .then(destinations => this.setState({destinations}))
  }
    
  render() {
    let filter = this.state.destinations.filter(destination=> destination.country === this.state.name)
    console.log(filter)
    return (
      <div>
        <Navbar/>
        <h1>USA</h1>
        { filter.map((destination) => {
    return <div key={destination.id}>
    <li> {destination.name} </li>
    <p>{destination.description}</p>
  </div>})
	    }
      </div>
    )
  }
}

export default USA