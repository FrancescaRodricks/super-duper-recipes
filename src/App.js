import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import SideColumn from './sideColumn';

const App = () => {
  return (
  <>
    <Header />
    <Router>
      <div className="topnav">
        <Link to="/super-duper-recipes">Home</Link>
      </div>
      <Switch>
        <Route path="/super-duper-recipes">
          <Home />
        </Route>
      </Switch>
    </Router>
    <Footer />

   </>
  );
};

const Header = () => {
  return(
  <div className="header">
    <h1>
    <i class="fas fa-utensils"></i>
    &nbsp; Recipes &nbsp;
    <i class="fas fa-utensils"></i>
    </h1>
    <i class="fas fa-fish"></i>
    &nbsp;
    <i class="fas fa-drumstick-bite"></i>
    &nbsp;
    <i class="fas fa-pepper-hot"></i>
    &nbsp;
    <p>Authentic goan recipes by my Mama</p>
  </div>
  )
};

const Home = () => {
  return (<div className="row">
    <div className="leftcolumn">
      <div className="card">
        <h2>TITLE HEADING</h2>
        <h5>Title description, Dec 7, 2017</h5>
        <div className="fakeimg">Image</div>
        <p>Some text..</p>
        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
      </div>
    </div>
    <SideColumn />
  </div>);
}

const Footer = () => {
  return(
    <div className="footer">
      <h2>Francesca L Rodricks ™</h2>
    </div>
  );
};

export default App;
