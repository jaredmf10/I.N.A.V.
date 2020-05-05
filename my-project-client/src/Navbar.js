import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class Navbar extends Component {
    render() {
        return (
            
        <div className="Navbar">
           <h1><Link to="/">I.N.A.V.</Link></h1>
           <h2>Profile</h2>
        </div>
        
        )
    }
}

export default Navbar

