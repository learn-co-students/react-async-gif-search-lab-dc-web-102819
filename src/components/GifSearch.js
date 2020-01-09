import React from 'react'

export default class GifSearch extends React.Component {
	render() {
		return (
			<div>
			<form onSubmit={this.props.handleSubmit}>
				<input type='text' onKeyUp={this.props.changeText}/>
				<input type='submit' />
			</form>

			</div>

			)
	}
}