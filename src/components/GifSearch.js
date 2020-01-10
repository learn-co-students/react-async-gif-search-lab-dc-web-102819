import React, {Component} from 'react'
class GifSearch extends Component{
  render(){
    return(
      <div className="ui search">
        <form className="ui icon input" onSubmit={this.props.submitHandler}>
          <i className="search icon"></i>
          <input className="prompt" type="text"
            placeholder="Search..." onChange={this.props.onChange}/>
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}
export default GifSearch
