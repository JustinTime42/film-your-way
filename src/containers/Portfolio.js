import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import '../styles/porfolio.css'

class Portfolio extends Component {

    constructor() {
        super()
        this.state = {
            videosArray: []
        }
    }
    
    componentDidMount() {
        let videosArray = []
        fetch("https://film-your-way.herokuapp.com/videos")
        .then(response => response.json())
        .then(videos => {
            videos.forEach(video => {                          
                videosArray.push(video)
            }) 
            this.setState({videosArray: videosArray})           
        }) 
    }   

    render() {
        return (      
            <div className="portfolio">              
                {
                    this.state.videosArray.map((video, i) => {
                        return (
                            <div className="portfolio-card" key={i}>                            
                                <ReactPlayer className="portfolio-video" width="100%" height="auto" url={video} controls={true} />
                            </div>
                        )                        
                    })
                }                
            </div>
        )
    }    
}

export default Portfolio