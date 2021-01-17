import React from 'react';
import './App.css';
import SongsList from './components/SongsList';
import Nav from './components/Nav';
import { Route, BrowserRouter as Router, Switch, } from "react-router-dom";

function App(){

  return (
    <Router>
      

      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/SongsList" component={SongsList} />
        </Switch>
      </div>
    
    </Router>
  );
}

const Home = () => (
  <div>
    <h1> Home page </h1>
    
  </div>
);

export default App;