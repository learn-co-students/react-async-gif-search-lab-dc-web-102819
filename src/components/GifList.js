import React from 'react'

export default class GifList extends React.Component {
	render() {
		console.log(this.props)
		return (
			<div> 
				<img src={this.props.gif} />
				<p />
			</div>

			)
	}
}