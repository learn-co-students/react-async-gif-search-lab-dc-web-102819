import React, {Component} from 'react'
class GifList extends Component{
  render(){
    // console.log(this.props.gif)
    const {title} = this.props.gif
    return(
      <div className='four wide column'>
        <ul>
          <li>{title}</li>
        </ul>
        {/* <div className="ui card">
          <div className="image">
            <img alt={title} src={this.props.gif.images.fixed_height_downsampled.url} />
          </div>
          <div className="content">
            <a className="header">{title}</a>
            <div className="meta">
              <span className="date">Joined in 2013</span>
            </div>
            <div className="source">
              Source: {source}
            </div>
          </div>
          <div className="extra content">
            <a href={url}>
            {url}
            </a>
          </div>
        </div> */}
      </div>
    )
  }
}

export default GifList
