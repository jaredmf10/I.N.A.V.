import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

class CountryCard extends Component {
    state = {
        destinations: []
    }

    render() {
        console.log(this.props.name)
        return (
            <div>
                <Button size="small" secondary> <Link to={`/${this.props.name}`}>{this.props.name}</Link></Button>
            </div>
        )
    }
}

export default CountryCard