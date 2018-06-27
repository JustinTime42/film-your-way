import React from 'react'
import { NavLink } from "react-router-dom"

import './hamburger.css'
import './navbar.css'

const Navbar = () => {

    //opens and closes the burger menu
    const onClick = () => {
        let burgerID = document.getElementById("burgerButton")
        burgerID.classList.toggle("is-active")
        if (burgerID.classList.contains("is-active")){            
            document.getElementById("navBar").style.height="100%"                  
        } else {
            document.getElementById("navBar").style.height="50px"            
        }
    }

    return (
        <header id="navBar">
            <div className="topnav">  
                <h4>
                    <div><NavLink to="/Contact">Inquire Now</NavLink></div>
                    <div>Call us: <a href="tel:1-555-555-5555">555-555-5555</a></div>
                </h4>
                <button id="burgerButton" className="hamburger hamburger--spin" type="button" onClick={onClick}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>                     
                </button>                  
            </div>
            <nav className="small-nav">
                <div>
                    <NavLink to="/">Home</NavLink>
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