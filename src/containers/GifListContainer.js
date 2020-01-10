import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component{

    constructor(){
        super()
        this.state = {
            animals : []
        }
    }

    fetch = (name, event) =>{
        event.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${name}&api_key=hf8BCWJfRr3et5BKOyfjvGTtNLESl9Ko&rating=g&limit=3`)
        .then(res => res.json())
        .then(data => {
            // debugger
            this.setState({
                animals : data.data
            })
        })
    }
    
    componentDidMount(){
       
    }

    render() {
        return (
            <div>
                <GifSearch fetch={this.fetch} />
                <GifList animals={this.state.animals} />
            </div>

        );
    }
}