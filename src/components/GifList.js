import React, { Component } from 'react';


export default class GitList extends Component{
    render() {
        
        return (
            <div>
                <ul>
                    {this.props.animals.map(animal => <li key={animal.id}>
                    <img src={animal.images.original.url} alt="hello" />
                    </li>
                    )}
                </ul>
            </div>
        );
    }
}