import React from 'react'
import GifListContainer from '../containers/GifListContainer'
import NavBar from './NavBar'

// the App component should render out the GifListContainer component 

class App extends React.Component {
  render() {
    return (
      <div>
          < NavBar 
            color='black' 
            title="Giphy Search" 
          />
          < GifListContainer

          />
      </div>
    )
  }
}

export default App

// giphy API key: 8q4RgCzr3eJmnKF8309CUJM0QYJY8Scj