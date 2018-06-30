import React from 'react'
import '../styles/about.css'
const About = ({ content }) => {

    
    return (
        <div className="description">
            <h2>{content.tagline}</h2>
            <div className="long-text">{content.description}</div>
            <div className="long-text">{content.expectations}</div>
            <h2>Our Equipment</h2>
           
                {
                    content.equipment.split(",").map(item => {
                        
                        return (
                            <div><h3>{item}</h3></div>
                        )
                    })
                }
            
      
        </div>
    )
   
}

export default About
