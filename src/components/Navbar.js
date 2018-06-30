import React from 'react'
import { NavLink } from "react-router-dom"

import '../styles/hamburger.css'
import '../styles/navbar.css'

const Navbar = ({ phone }) => {

    const tel = `tel:${phone}`

    //opens and closes the burger menu
    const onClick = () => {
        let burgerID = document.getElementById("burgerButton")
        burgerID.classList.toggle("is-active")
        if (burgerID.classList.contains("is-active")){            
            document.getElementById("navBar").style.height="100%"                  
        } else {
            document.getElementById("navBar").style.height="60px"            
        }
    }

    return (
        <header id="navBar">
            <div className="topnav">  
                <div>
                    <NavLink to="/Contact"><h1>Inquire Now</h1></NavLink>
                    <h1>Call us: <a href={tel}>{phone}</a></h1>
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