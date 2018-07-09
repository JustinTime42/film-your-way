import React from 'react'
import '../styles/footer.css'
const Footer = ({ tagline }) => {
    return (
        <div>
            <h3>{tagline}</h3>
            <div className="social-media">
                <a href="https://www.facebook.com/filmyourwayproductions/" className="fa fa-facebook"></a>
                <a href="https://www.youtube.com/channel/UCmpLEzzC3ORbcjDjVRd72KA" className="fa fa-youtube"></a>
                <a href="https://www.instagram.com/filmyourwayproductions/" className="fa fa-instagram"></a>                
            </div>                
            <p>&copy; 2018 Film Your Way &bull; ALL RIGHTS RESERVED</p>
        </div>
    )
}

export default Footer