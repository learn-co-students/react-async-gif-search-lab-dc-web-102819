import React , {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GiftListContainer extends Component{

    constructor(){
        super()
        this.state = {
            searchValue: " ",
            gifs: []
        }
    }

    gifFetch(api){
      fetch(api)
      .then(response => response.json())
      .then(gifs => this.fillGifs(gifs))
    }

    getValueFetch = (e) => {
        e.preventDefault()
        const api =  `https://api.giphy.com/v1/gifs/search?q=${e.target.value}&api_key=QkrhdRxJkafQwvgDa817aTFJUZi1VPZK&rating=g`
        this.gifFetch(api)
      }

    fillInput = (e) =>{
         this.setState({
             searchValue: e.target.value
         })
      }

    fillGifs = (gifs) => {
       
        if(gifs.data.length !== 0){
        this.setState({
            gifs: [`${gifs.data[0].images.original.url}`,`${gifs.data[1].images.original.url}`,`${gifs.data[2].images.original.url}` ]
        })}else{
            console.log("nononono")
        }
    }

    render(){
      
        return (
        <div>
            <GifSearch fillInput={this.fillInput} getValueFetch={this.getValueFetch} searchValue={this.state.searchValue}/>
            <GifList gifState ={this.state.gifs}/>
        </div>
        )
        
    }
}

export default GiftListContainer