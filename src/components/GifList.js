import React from 'react'

class GifList extends React.Component {
	// gif => gif.images.original.url
	render() {
		return(
			<ul>
				{this.props.list.map(gif => <li><img src={gif.images.original.url} alt={"img" + Math.random()*1}/></li>)}
			</ul>
		)
	}
}

export default GifList