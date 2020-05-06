import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import AboutUs from './aboutus'
import Offices from './offices'
import { Route, Link, BrowserRouter as Router, Switch  } from 'react-router-dom'


import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const bootstrapNav=(
  <Router>
    <Nav>
      <Nav.Item>
      <Link to="/" className="nav-link">Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/offices/100" className="nav-link">Offices</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/aboutus" className="nav-link">AboutUs</Link>
      </Nav.Item>  
    </Nav>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/offices/:id" component={Offices} />
    </Switch>
</Router>

);


/* const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/offices">Offices</Link>
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
        
      </ul>
      <Route  exact path="/" component={App} />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/offices" component={Offices} />
    </div>
  </Router>
) */


ReactDOM.render(
  bootstrapNav,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
