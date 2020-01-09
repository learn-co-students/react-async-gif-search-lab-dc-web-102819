import React from 'react'

class GifSearch extends React.Component {
	// gif => gif.images.original.url
	render() {
		return(
			<div >
			<form id="search-form" onSubmit={this.props.submitForm}>
				<input type="text" name="query" placeholder='A cute cat perhaps...?' onChange={this.props.onUpdateSearch}/>
				<input type='submit' value="Search" />
			</form>
			</div>
		)
	}
}

export default GifSearch


/*

<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>

*/