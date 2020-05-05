import React, { Component } from 'react'
import Navbar from './Navbar'

class Mexico extends Component {
  state = {
    name : "Mexico",
    destinations : []
  }

  componentDidMount(){
    fetch('http://localhost:3000/destinations')
    .then(res => res.json())
    .then(destinations => this.setState({destinations}))
  }
    
  render() {
    let filter = this.state.destinations.filter(destination=> destination.country === this.state.name)
    
    return (
      <div>
        <Navbar/>
        <h1>Mexico</h1>
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

export default Mexico