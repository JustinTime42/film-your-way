import React from 'react'
import { NavLink } from "react-router-dom"
import '../styles/home.css'


const Home = ({ logo, heroshot }) => {
    
    return (
        <div className="home">            
            <div>
                <NavLink to="/About"><img className="heroshot" src={heroshot} /></NavLink>
                
            </div>
        </div>        
    )    
}

export default Home