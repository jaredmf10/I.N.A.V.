import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";

class Login extends Component {
  state = {
    newUser : {}
  }
  handleFormChange = (e) => {
    this.setState({newUser: {...this.state.newPoem, [e.target.name]:e.target.value}})
  }

  handlePost = () => {
    // let newUser = {name, password_digest}
    fetch('http://localhost:3000/users/', {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(this.state.newUser)
    })
    .then((response) => {
      return response.json()
  })
  .then((response) => {
    return (
      <Route
        render={({ location }) =>
          (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          )
        }
      />
    );
  })
  }
  render(){
    return (
      <div>
        <h1> WELCOME TO "I.N.A.V." </h1>
        <h2>I Need A Vacation </h2>
        <h3> Sign up </h3>
        
        <form>
          <div>
            <input type="text" name="name" placeholder="Username" onChange={this.handleFormChange}/>
            <label htmlFor="username">Username</label>
          </div>
          <div>
            <input type="password" name="password_digest" placeholder="Password" onChange={this.handleFormChange}/>
            <label htmlFor="password">Password</label>
          </div>
          <input type="submit" value="Submit" onClick={this.handlePost}/>
        </form>
      </div>
    );
    }
  };

  export default Login