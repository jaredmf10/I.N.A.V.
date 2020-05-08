import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar'

class Profile extends Component {

    state = {
        postcards : []
    }
    componentDidMount() {
        fetch("http://localhost:3000/postcards")
          .then(resp => resp.json())
          .then(data => this.setState({ postcards: data }))
      }

      renderCards = () => {
        return (
            <>
                {this.state.postcards.postcards.map((postcard) =>       
             <li key={postcard.id}>{postcard.user_text}</li>
            )}
            </>
        )
    }
    
    render() {
    console.log(this.state.postcards.postcards)
        return (
            <div>
                <Navbar/>
                <h1>Welcome, Jared!</h1>

                <h3>All Postcards</h3>
                <button onClick={this.renderCards}>Show All Postcards</button>
            </div>
        )
    }
}

export default Profile