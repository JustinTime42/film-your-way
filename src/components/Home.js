import React from 'react'
import '../styles/home.css'


const Home = ({ logo, heroshot }) => {
    
    return (
        <div className="home">
            <div>           
                <img src={logo}/>
            </div>
            <div>
                <img src={heroshot} />
            </div>
        </div>        
    )    
}

export default Home