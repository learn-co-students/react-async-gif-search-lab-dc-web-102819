import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {
	
	constructor() {
		super()
		this.state = {
			formText: '',
			gifs: []
		}
	}

	addGifs = (gifs) => {
		let searchedGifs = []
		gifs.data.slice(0,3).map(gif => searchedGifs.push(gif.images.original.url))
		this.setState({
			gifs: searchedGifs
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.formText}&api_key=8mwHpMQiERUXejGKjNkALVeyB083V1Jo&rating=g`)
		.then(resp => resp.json())
		.then(gifs=> this.addGifs(gifs))
		event.target.reset()
	
	}

	changeText = (event) => {
		this.setState({
			formText: event.target.value
		})
	}

	render() {
		return (
			<div>
				<GifSearch changeText={this.changeText} handleSubmit={this.handleSubmit}/>
				{this.state.gifs.map(gif => <GifList gif={gif} />)}
			</div>
			)
	}
}


//