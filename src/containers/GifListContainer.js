import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            gifs: [],
            searchTerm: ""
        }
    }

    handleClick = () => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=8q4RgCzr3eJmnKF8309CUJM0QYJY8Scj&rating=g&limit=45`)
        .then(res => res.json())
        .then(gifs => {
            this.setState({
                gifs: gifs.data
            })
        })
    }

    handleSearch = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/search?q=welcome&api_key=8q4RgCzr3eJmnKF8309CUJM0QYJY8Scj&rating=g&limit=45')
        .then(res => res.json())
        .then(gifs => {
            this.setState({
                gifs: gifs.data
            })
        })
    }

    render() {
        return(
            <div>
                < GifSearch handleSearch={this.handleSearch} handleClick={this.handleClick} />
                {this.state.gifs.map( gif => {
                    return <GifList gifURLs={gif.images.fixed_height_still.url} searchTerm={this.state.searchTerm}/>
                    })
                }
            </div>
        )
    }
}

export default GifListContainer