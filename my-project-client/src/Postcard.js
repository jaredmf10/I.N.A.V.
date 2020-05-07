import React, { Component } from 'react'
import Navbar from './Navbar'

class Postcard extends Component {

    state={
        cities : []
    }

    componentDidMount() {
        fetch("http://localhost:3000/cities")
          .then(resp => resp.json())
          .then(data => this.setState({ cities: data.cities}))
      }


    filterCities = () => {
      const cities = this.state.cities.filter(city => "/" + city.city[0].country === window.location.pathname)
      // console.log(cities)
    return(
      <>
      {cities.map(city => {return <div key={city.name}>
            <li> {city.name} </li>
            <p>{city.city[0].description}</p>
          </div>}) }
      </>
    )
    }

  render() {
    
    return (
      <div>
        <Navbar/>
        {this.filterCities()}
      </div>
    )
  }
}

export default Postcard