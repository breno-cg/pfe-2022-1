import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Galeria from './Galeria';
import Sobre from './Sobre';
import Contato from './Contato'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <div>
          <Switch>
            <Route exact path = "/">
              <Home/>
            </Route>
            <Route path = "/Galeria">
              <Galeria/>
            </Route>
            <Route path = "/Sobre">
              <Sobre/>
            </Route>
            <Route path = "/Contato">
              <Contato/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
