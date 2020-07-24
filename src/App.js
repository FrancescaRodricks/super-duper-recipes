import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

const App = () => {
  return (
   <>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/super-duper-recipes">Home</Link>
            </li>
            <li>
              <Link to="/super-duper-recipes/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/super-duper-recipes/about">
            <About />
          </Route>
          <Route path="/super-duper-recipes">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    <Footer />
   </>
  );
};

const Home = () => {
  return <h2>Nothing here yet at home:P </h2>;
}

const About = () => {
  return <h2>Nothing here yet at about :P</h2>;
}

const Footer = () => {
  return null;
};

export default App;
