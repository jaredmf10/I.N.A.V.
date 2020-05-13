import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class CountryCard extends Component {
    state = {
        destinations : []
    }
    
    render() {
    // console.log(this.props.name)
        return (
            <div>
                { <li> <Link to={`/${this.props.name}`}>{this.props.name}</Link></li>}
            </div>
        )
    }
}

export default CountryCard