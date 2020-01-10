import React from 'react'

const gifList = (props) => {
    console.log(props.gifState)
   if (props.gifState.length !== 0) {return(
      
    <div>
      <img src={`${props.gifState[0]}`} alt="no image here"/>
      <img src={`${props.gifState[1]}`} alt="no image here"/>
      <img src={`${props.gifState[2]}`} alt="no image here"/>
  </div>
  )}else{
      return null
  }
 
}

export default gifList