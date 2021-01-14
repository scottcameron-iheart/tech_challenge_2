import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch, } from "react-router-dom";

import Songs from './components/Songs';
// import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Songs" compoenent={Songs} />
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