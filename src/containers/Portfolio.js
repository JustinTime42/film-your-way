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
                        if (video.video) {
                            return (
                            <div className="portfolio-card" key={i}>                            
                                <ReactPlayer className="portfolio-video" width="100%" height="auto" url={video.video.url} controls={true} />
                                <p><a href={video.youtube}>{video.video.title}</a></p>
                            </div>
                            ) 
                        }
                        
                            
                        
                                               
                    })
                }                
            </div>
        )
    }    
}

export default Portfolio