import React, { Component } from 'react'
import { Route, HashRouter } from 'react-router-dom'
import Portfolio from '../containers/Portfolio'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Navbar from '../components/Navbar'

import '../styles/App.css'


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
        <HashRouter>
          <div className="App">
            <Navbar phone={this.state.phone} />
            <img src={this.state.logo.url} />
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
            <Route
              path="/about"
              render={(props) => {
                return (
                  <About
                    {...props}
                    content ={this.state}
                  />                    
                )
              }}
            />
            <Route path="/portfolio" component={Portfolio} /> 
            <Footer tagline={this.state.tagline}/>
          </div>  
        </HashRouter>      
    )
  }
}

export default App
