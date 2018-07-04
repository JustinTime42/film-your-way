import React from 'react'
import '../styles/footer.css'
const Footer = ({ tagline }) => {
    return (
        <div>
            <h3>{tagline}</h3>
            <div className="social-media">
                <a href="#" className="fa fa-facebook"></a>
                <a href="#" className="fa fa-twitter"></a>
                <a href="#" className="fa fa-instagram"></a>
                <a href="#" className="fa fa-pinterest"></a>
            </div>                
            <p>&copy; 2018 Film Your Way &bull; ALL RIGHTS RESERVED</p>
        </div>
    )
}

export default Footer