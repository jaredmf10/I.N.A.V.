import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react'

const Login = () => {
  
    return (
      <div>
        <h1> WELCOME TO "I.N.A.V." </h1>
        <h2>I Need A Vacation </h2>
        <h3> Sign up </h3>
        
        <form>
          <div>
            <input type="text" name="username" placeholder="Username" />
            <label htmlFor="username">Username</label>
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
            <label htmlFor="password">Password</label>
          </div>
          <Button size="small"><Link to="/">Submit</Link></Button>
        </form>
      </div>
    );
  };

  export default Login