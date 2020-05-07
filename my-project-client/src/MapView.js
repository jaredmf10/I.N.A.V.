import React, { Component } from 'react'
import ContinentCard from './ContinentCard'
// import { Container, Button, Image, Grid } from 'semantic-ui-react'

class MapView extends Component {

    state = {
        current: "all"
    }

    //changes state according to the continent currently clicked
    //state determines which map and country is rendered
    onClick = name => {
        this.setState({ current: name })
    }

    renderContinentCard = () => {
        return (
            <>
                {Object.keys(this.props.continents).map((continent, indx) => {
                    return <ContinentCard key={indx} onClick={this.onClick} name={continent} continent={this.props.continents[continent]} />
                })}
            </>
        )
    }

    render() {
        // console.log(this.state)
        // console.log(this.props.continents)
        return (
            <div className="MapView">
                {this.props.continents ? this.renderContinentCard() : null}
            </div>
        )
    }
}

export default MapView