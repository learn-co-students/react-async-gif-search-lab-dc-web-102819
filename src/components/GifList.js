import React from 'react'
import Card from 'react-bootstrap/Card'

export default class GifList extends React.Component{
    

    
    render(){
        console.log(this.props)


        return (
                    <ul className='list-group list-group-flush'>
                        {this.props.gifs.map(gif => (
                            <li 
                                className='list-group-item'
                                style={{alignItems: 'center', height: '500px', width: '520px'}}
                            >
                                    <img src={gif.images.original.url} 
                                        style={{height: '500px', width: '500px'}}>
                                    </img>
                            </li>
                        ))}
                    </ul>
        
        )
    }
}