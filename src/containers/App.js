import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Portfolio from '../containers/Portfolio'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Navbar from '../components/Navbar'

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  
  componentDidMount() {
    fetch("https://film-your-way.herokuapp.com/home")
    .then(response => response.json())
    .then(items => this.setState({...items}))
  }

  render() {

    if(!this.state.logo){
      return null      
    }

    return (
        <BrowserRouter>
          <div className="App">
            <Navbar logo={this.state.logo.url} />
            <Switch>
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
                      tagline={this.state.tagline} 
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
            </Switch>
            <Footer tagline={this.state.tagline}/>
          </div>  
        </BrowserRouter>      
    )
  }
}

export default App
