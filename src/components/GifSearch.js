import React from 'react'

export default class GifSearch extends React.Component{
    
    constructor(){
        super()
        this.state = {
            query: ''
        }
    }

    handleSubmit = (event) => {
            event.preventDefault()
            this.props.fetchGifs(this.state.query)
        }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState(
            {query: event.target.value} 
        )
    }

    render(){
        // console.log(this.props)
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <input 
                            className ='form-control'
                            placeholder = 'Search...'
                            type='text' 
                            value={this.state.query} 
                            onChange={this.handleChange} 
                        />
                    </div>
                </form>
            </div>
        )
    }
}
