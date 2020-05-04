import React, { Component } from 'react'

class CountryCard extends Component {
    
    render() {
        
        return (
            <div>
                { this.props.country.map((country) => {
		return <p key={country.id}> {country.name} </p>})
	    }
            </div>
        )
    }
}

export default CountryCard