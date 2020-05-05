import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class CountryCard extends Component {
    state = {
        destinations : []
    }

    componentDidMount(){
        fetch('http://localhost:3000/destinations')
        .then(res => res.json())
        .then(destinations => this.setState({destinations}))
    }
    
    render() {
    
        return (
            <div>
                { this.props.country.map((country) => {
		return <li key={country.id}> <Link to={`/${country.name}`}>{country.name}</Link></li>})
	    }
            </div>
        )
    }
}

export default CountryCard