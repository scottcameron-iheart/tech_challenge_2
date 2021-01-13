import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import Main from './components/Main';
import Songs from './components/Songs';

function App() {
  return (
  <Router> 

    <div  className="container"> <p> Nabar </p></div> 
      <nav>
        <ul> 
          <li> 
            <Link to="/">Main</Link>
           
          </li>
          <li> 
           
            <Link to="/Songs"> Songs</Link>
          </li>
        </ul>
      </nav> 

    <Switch>
      <Route path='/Songs' component={Songs} />
      <Route path='/' component={Main} />
    </Switch>
 

  </Router>
  )
}

export default App;