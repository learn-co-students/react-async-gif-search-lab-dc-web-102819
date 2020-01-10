import React, {PureComponent} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const URL = 'https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=aQEbryphgmP82CU8FTIT8hAV9vV7fva4&rating=g'

class GifListContainer extends PureComponent{
  originalGifs = null
  constructor(){
    super()
    this.state = {
      gifs: [],
      searchQuery: ''
    }
  }
  componentDidMount(){
    fetch(URL)
    .then(res =>res.json())
    .then(gifs => {
      this.originalGifs = gifs.data.splice(-3)
      return this.setState({gifs: this.originalGifs})
    })
    .catch(err => console.warn(err.message))
  }
  onChange = e => {
    this.setState({searchQuery: e.target.value})
  }
  submitHandler = e => {
    e.preventDefault()
    this.searchHelper()
  }
  searchHelper = () => {
    let copyGifs = this.state.gifs.filter(gif => gif.title.toLowerCase() === this.state.searchQuery.toLowerCase())
    if(copyGifs.length === 0){
      this.setState({gifs: this.originalGifs})
    }else{
      this.setState({gifs: copyGifs})
    }
  }

  render(){
    return(
      <div>
        <GifSearch submitHandler={this.submitHandler} onChange={this.onChange}/>
        <div className='ui divider'></div>
        <div className='ui grid'>
          {this.state.gifs.map(gif => <GifList key={gif.id} gif={gif}/>)}
        </div>
      </div>
    )
  }
}
export default GifListContainer
