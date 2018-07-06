import React from 'react'
import '../styles/about.css'

const About = ({ content }) => {

    return (
        <div className="description">
            <div className="about-image">
                <img alt="photo of us" src={content.aboutimg.url}/>
            </div>
            <div className="about-text">
                <h2 className="about-h2">{content.tagline}</h2>
                <div className="long-text"><p>{content.description}</p></div>
                <div className="long-text"><p>{content.expectations}</p></div>
                <h2 className="about-h2">Our Equipment</h2>            
                {
                    content.equipment.split(",").map(item => {
                        
                        return (
                            <div><h3>{item}</h3></div>
                        )
                    })
                }            
            </div>
        </div>
    )
   
}

export default About
