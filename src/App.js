import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Showcase from './components/Showcase'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path='/' render={() => {
            return (
              <div>
                <Header />
                <div className="AppBodyContainer">
                  <Route exact={true} path="/showcase" component={ Showcase } />
                  <Route path="/about" component={ About } />
                </div>
              </div>
            )} }
          />
        </Switch>
        </div>
      </ BrowserRouter>
    );
  }
}

export default App;
