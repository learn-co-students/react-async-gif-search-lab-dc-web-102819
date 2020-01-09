import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
	constructor() {
		super()
		this.state = {
			gifList: [],
			query: 'cat'
		}
	}

	fetchGifs = () => {
		const limit = 3
		const query = this.state.query
		fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=HrUeo9GaTtylNLGRrAI2J3VOXweXoPEY&rating=g&limit=${limit}`)
			.then(response => response.json())
			.then(json => {
				console.log(json.data)
				this.setState({
					gifList: json.data
				})
			})
	}

	onUpdateSearch = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	submitForm = (event) =>{
		event.preventDefault()
		this.setState({
			[event.target.query.name]: event.target.query.value
		})
		this.fetchGifs()
		event.target.reset()
	}

	render() {
		return(
			<div>
				<GifSearch onUpdateSearch={this.onUpdateSearch} submitForm={this.submitForm}/>
				<GifList list={this.state.gifList} />
			</div>
			)
	}
}

export default GifListContainer