import React from 'react'


export default class GifList extends React.Component {
    
    
    producedLis = () => {
        return this.props.urls.map((url, index) => {
            return <li><img src={url} alt={'photo #' + index } key={index} /></li>
        })
    }
    
    render() {
        return <ul> {this.producedLis()} </ul>
    }
}