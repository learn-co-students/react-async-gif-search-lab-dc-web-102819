import React from 'react'

class GifSearch extends React.Component {

    render() {
        return(
            <div>
                <h2>Search GIFs by Category</h2>
                <input type="search" placeholder='Search...' onChange={this.props.handleSearch}></input>
                <button type="button" onClick={this.props.handleClick}>Submit</button>
            </div>
        )
    }
}

export default GifSearch