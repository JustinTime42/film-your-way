import React from 'react'
import { NavLink } from "react-router-dom"

import '../styles/hamburger.css'
import '../styles/navbar.css'

const Navbar = ({ logo }) => {
    //opens and closes the burger menu
    const onClick = () => {
        let burgerID = document.getElementById("burgerButton")
        burgerID.classList.toggle("is-active")
        if (burgerID.classList.contains("is-active")){            
            document.getElementById("navBar").style.height="100%"                  
        } else {
            document.getElementById("navBar").style.height="30px"            
        }
    }

    return (
        <header id="navBar">
            <div className="topnav">  
                <div>
                    <img className="logo" src={logo} />
                </div>
                <button id="burgerButton" className="hamburger hamburger--spin" type="button" onClick={onClick}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>                     
                </button>                  
            </div>
            <nav className="small-nav">
                <div>
                    <NavLink exact to="/">Home</NavLink>
                </div>
                <div>
                    <NavLink to="/About">About Us</NavLink>
                </div>
                <div>
                    <NavLink to="/Portfolio">Portfolio</NavLink>
                </div>
                <div>
                    <NavLink to="/Contact">Contact Us</NavLink>
                </div>
            </nav>  
        </header>

    )
 
}

export default Navbar