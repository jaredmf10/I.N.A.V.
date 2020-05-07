import React, { Component } from 'react'
import CountryCard from './CountryCard'
import { Button } from 'semantic-ui-react'

class ContinentCard extends Component {
    
    state = {
        visible : false,
    }

    toggleState = () => {
        if(this.state.visible === false){
            this.setState({ visible: true })
        }else{
            this.setState({ visible: false })
        }
    }

    renderCountries = () => {
        return (
            <>
                {Object.keys(this.props.continent.countries).map((country,indx) => {
                    return <CountryCard key={indx} name={country} country={this.props.continent.countries[country]} />})}
            </>
        )
    }



    render() {
    // console.log(this.props)
    return (
        <div >
              <Button size="small" onClick={() => this.toggleState() }>{this.props.name}</Button>
            { this.state.visible ? this.renderCountries() : null }
        </div>
        )
    }
}

export default ContinentCard