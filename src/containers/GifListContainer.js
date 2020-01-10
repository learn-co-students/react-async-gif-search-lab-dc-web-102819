import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
    
    constructor(){
        super()
        this.state = {
            gifs: []
        }
    }


    fetchGifs = (query) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(gifs => {
                this.setState (
                    {gifs: gifs.data}
                )
            }
        )
    }

    componentDidMount(){
        this.fetchGifs()
    }
    
   
    render(){
        return (
            <div>
                <GifSearch fetchGifs = {this.fetchGifs}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
} 