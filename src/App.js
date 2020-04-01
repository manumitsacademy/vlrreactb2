import React from 'react';
import logo from './logo.svg';
import './App.css';
import First from './First'
import H1Comp from './H1Comp';
import Home from './Home';
import About from './About'
import {BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom';
import Students from './students';
import Employees from './Employees';
import Countries from './Countries';
function App() {
  return (
    
        <Router>
            <div style={{border:'1px solid',margin:'10px',padding:'10px'}}>          
            <h1>Welcome to Routing</h1>
            <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/about">About</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/students">Students</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/employees">Employees</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/countries">Countries</Link>&nbsp;&nbsp;&nbsp;
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route> 
              <Route exact path="/about" component={About}/> 
              <Route exact path="/countries" component={Countries}/> 
              <Route path="/students" component={Students}></Route>              
              <Route path="/employees" component={Employees}></Route>
            </Switch>
            </div>
        </Router>
        
      
    
  );
}

export default App;
