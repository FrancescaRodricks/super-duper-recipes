import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './home';
import SideColumn from './sideColumn';
import Sweet from './sweet';
import Savory from './savory';
import Spicy from './spicy';

const App = () => {
  return (
  <>
    <Header />
    <Router>
      <div className="topnav">
        <Link to="/super-duper-recipes">Home</Link>
        <Link to="/super-duper-recipes/sweet">Sweet</Link>
        <Link to="/super-duper-recipes/savory">Savory</Link>
        <Link to="/super-duper-recipes/spicy">Spicy</Link>
      </div>
      <div className="row">
        <Switch>
          <Route path="/super-duper-recipes/sweet">
            <Sweet />
          </Route>
          <Route path="/super-duper-recipes/savory">
            <Savory />
          </Route>
          <Route path="/super-duper-recipes/spicy">
            <Spicy />
          </Route>
          <Route path="/super-duper-recipes">
            <Home />
          </Route>
        </Switch>
        <SideColumn />
      </div>
    </Router>
    <Footer />
   </>
  );
};

const Header = () => {
  return(
  <div className="header">
    <h1>
    <i className="fas fa-utensils"></i>
    &nbsp; Recipes &nbsp;
    <i className="fas fa-utensils"></i>
    </h1>
    <i className="fas fa-fish"></i>
    &nbsp;
    <i className="fas fa-drumstick-bite"></i>
    &nbsp;
    <i className="fas fa-pepper-hot"></i>
    &nbsp;
    <p>Authentic goan recipes by my Mama</p>
  </div>
  )
};

const Footer = () => {
  return(
    <div className="footer">
      <h2>Francesca Rodricks ™ {new Date().getFullYear()}</h2>
    </div>
  );
};

export default App;
