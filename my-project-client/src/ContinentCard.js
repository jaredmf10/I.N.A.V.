import React, { Component } from 'react'
import CountryCard from './CountryCard'

class ContinentCard extends Component {

    state = {
        countries : [this.props.continent.countries],
        visible : false,
    }

    

    toggleState = () => {
        if(this.state.visible === false){
            this.setState({ visible: true })
        }else{
            this.setState({ visible: false })
        }
    }
        
    render() {
        
    return (
        <div >
            <p onClick={() => this.toggleState() }>{this.props.continent.name}</p>
            { this.state.visible ? <CountryCard country={this.state.countries[0]}/> : null }
        </div>
        )
    }
}

export default ContinentCard