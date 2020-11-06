import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './components/Navigation';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Week1 from './Week1';
import Voting from './components/Voting';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import logo from './logo.jpg';


function App() {
    return(
        <Router>
        <div className ="App">
          <Navigation/>
          <Switch>
            <Route path ="/" exact component = {Home}/>
            <Route path="/login" component = {LogIn}/>
            <Route path ="/signup" component = {SignUp}/>
            <Route path = "/week/1-11-20" component = {Week1}/>
            <Route path ="/voting" component = {Voting}/>
          </Switch>
        </div>
        </Router>
    );
    }  
const Home = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} classname ="App-logo" alt ="logo"/>
      <h1> Welcome to VBooker</h1>
      <h1>This is the place for book lovers to meet and discuss books</h1>

    </header>
    
  </div>
)

export default App;
