import React, { Component } from 'react'
import { Card, Icon, Button, Grid, Image, Item } from 'semantic-ui-react'
import Navbar from './Navbar'

class Postcard extends Component {

  state = {
    cities: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/cities")
      .then(resp => resp.json())
      .then(data => this.setState({ cities: data.cities }))
  }



  filterCities = () => {
    const cities = this.state.cities.filter(city => "/" + city.city[0].country === window.location.pathname)
   
    return (
      <>
        <h1>{cities[0].city[0].country}</h1>
        <Item.Group>
          {cities.map(city => {

            return (
              <Item>
                <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />

                <Item.Content>
                  <Item.Header as='a'>{city.city[0].name}</Item.Header>
                  <Item.Meta></Item.Meta>
                  <Item.Description>
                    {city.city[0].description}
                  </Item.Description>
                  <Item.Extra>Region: {city.city[0].region}</Item.Extra>
                </Item.Content>
              </Item>
            )
          })}
        </Item.Group>
      </>
    )
  }

  render() {
    return (
      <div>
        <Navbar />
        {this.state.cities.length !== 0 ? this.filterCities() : null}
      </div>
    )
  }
}

export default Postcard