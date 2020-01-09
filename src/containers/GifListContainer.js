import React, { Component } from "react";
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

const APIKEY = 'V2Zchq6mRyNw8AebUK7KfaGzAYFEjMfa' 
const giphyUrlPrefix = 'https://api.giphy.com/v1/gifs/search?q='
const giphyUrlSuffix = '&api_key=' + APIKEY +'&rating=g'

export default class GifListContainer extends Component {
    constructor() {
        super()
        this.state = {
            searchTerm: "dolphin",
            gifUrls: []
        }
    }

    fetchGifs = () => {
        fetch(giphyUrlPrefix + this.state.searchTerm + giphyUrlSuffix)
        .then(response => response.json())
        .then(returnObj => 
            this.setState({
                gifUrls: returnObj.data.slice(0,3).map(image => image.images.original.url)
            }))
    }

    componentDidMount() {
        this.fetchGifs()
    }

    componentDidUpdate() {
        this.fetchGifs()
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.setState({
            searchTerm: e.target.query.value
        })
    }
    
    render() {
        return <span>
            <GifList urls={this.state.gifUrls} />
            <GifSearch submitHandler={this.submitHandler} initialTerm={this.state.searchTerm} />
        </span>
    }
}