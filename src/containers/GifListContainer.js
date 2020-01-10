import React, {PureComponent} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const URL = 'https://api.giphy.com/v1/gifs/search?q=dolphin&limit=3&api_key=aQEbryphgmP82CU8FTIT8hAV9vV7fva4&rating=g'

class GifListContainer extends PureComponent{
  constructor(){
    super()
    this.state = {
      allGifs: [],
      filterGifs:[],
      searchQuery: ''
    }
  }
  componentDidMount(){
    fetch(URL)
    .then(res =>res.json())
    .then(gifs => {
      // console.log()
      this.setState({allGifs: gifs.data})
      return this.setState({filterGifs: this.state.allGifs})
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
    const test = this.state.allGifs.filter(gif => gif.title.toLowerCase() === this.state.searchQuery.toLowerCase())
    // console.log(copy)
    if(test.length === 0){
      this.setState({filterGifs: this.state.allGifs})
    }else{
      this.setState({filterGifs: test})
    }
  }

  render(){
    return(
      <div>
        <GifSearch submitHandler={this.submitHandler} onChange={this.onChange}/>
        <div className='ui divider'></div>
        <div className='ui grid'>
          {this.state.filterGifs.map(gif => <GifList key={gif.id} gif={gif}/>)}
        </div>
      </div>
    )
  }
}
export default GifListContainer
