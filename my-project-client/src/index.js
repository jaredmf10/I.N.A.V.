import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './Login'
import USA from './USA'

ReactDOM.render((
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/USA" component={USA} />
        </Switch>
    </Router>),
    document.getElementById('root')
  );