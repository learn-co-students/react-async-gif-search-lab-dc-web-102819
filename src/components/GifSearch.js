import React, { Component } from 'react';

export default class GifSearch extends Component{

    constructor(){
        super()
        this.state={
            name:""
        }
    }

    handleNameChange = (event) =>{
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" onChange={this.handleNameChange}/>
                    <button onClick={ (event) => {this.props.fetch(this.state.name, event)}} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                </nav>
            </div>
        );
    }
}