import React, { Component } from "react";


export default class GifSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: this.props.initialTerm
        }
    }

    handleChange = (e) => {
        this.setState({searchTerm: e.target.value})
    }
    
    
    render() {
        return <form onSubmit={this.props.submitHandler} style={{position: 'absolute', right: 0}}>
            <label>Search by Keyword</label>
            <input type='text' name='query' value={this.state.searchTerm} onChange={this.handleChange} />
            <button type='submit'>Search</button>
        </form>
    }
}