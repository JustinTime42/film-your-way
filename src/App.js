import React, { Component } from 'react'
import { Route, HashRouter } from "react-router-dom"

import Navbar from './components/Navbar'
import Home from './components/Home'
import './styles/App.css'
import Contact from './components/Contact';

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  
  componentDidMount() {
    fetch("https://film-your-way.herokuapp.com/home")
    .then(response => response.json())
    .then(items => {      
        this.setState({...items})
    })
  }

  render() {

    if(!this.state.logo){
      return null      
    }

    return (
      <div className="App">
        <HashRouter>
          <div>
            <Navbar phone={this.state.phone} />
            <Route 
              exact path="/" 
              render={(props) => {
                return (
                  <Home 
                    {...props} 
                    logo={this.state.logo.url} 
                    heroshot={this.state.heroshot.url}
                     
                  />
                ) 
              }}                
            />
            <Route 
              path="/contact"
              render={(props) => {
                return (
                  <Contact
                    {...props}
                    logo={this.state.logo.url}  
                  />
                )
              }}
            />
          </div>        
        </HashRouter>
      </div>
    )
  }
}

export default App
