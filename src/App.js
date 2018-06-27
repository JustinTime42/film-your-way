import React, { Component } from 'react'
import { Route, HashRouter } from "react-router-dom"

import Navbar from './components/Navbar'
import Home from './components/Home'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
          </div>
        
        </HashRouter>
      </div>
    );
  }
}

export default App
