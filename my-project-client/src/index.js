import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './Login'
import USA from './USA'
import Canada from './Canada'
import Mexico from './Mexico'
import Brazil from './Brazil'
import Peru from './Peru'
import Argentina from './Argentina'
import England from './England'
import France from './France'
import Italy from './Italy'
import Egypt from './Egypt'
import Tanzania from './Tanzania'
import SouthAfrica from './SouthAfrica'
import China from './China'
import Japan from './Japan'
import India from './India'
import Australia from './Australia'
import NewZealand from './NewZealand'

ReactDOM.render((
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/USA" component={USA} />
            <Route path="/Canada" component={Canada} />
            <Route path="/Mexico" component={Mexico} />
            <Route path="/Brazil" component={Brazil} />
            <Route path="/Peru" component={Peru} />
            <Route path="/Argentina" component={Argentina} />
            <Route path="/England" component={England} />
            <Route path="/France" component={France} />
            <Route path="/Italy" component={Italy} />
            <Route path="/Egypt" component={Egypt} />
            <Route path="/Tanzania" component={Tanzania} />
            <Route path="/SouthAfrica" component={SouthAfrica} />
            <Route path="/China" component={China} />
            <Route path="/Japan" component={Japan} />
            <Route path="/India" component={India} />
            <Route path="/Australia" component={Australia} />
            <Route path="/NewZealand" component={NewZealand} />
        </Switch>
    </Router>),
    document.getElementById('root')
  );