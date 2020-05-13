import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './Login'
import Postcard from './Postcard'
import Profile from './Profile'


ReactDOM.render((
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
            <Route path="/:countryId" component={Postcard} />
        </Switch>
    </Router>),
    document.getElementById('root')
  );

