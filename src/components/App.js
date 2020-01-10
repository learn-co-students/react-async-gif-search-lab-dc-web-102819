import React, {PureComponent} from 'react'
import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'
// the App component should render out the GifListContainer component


class App extends PureComponent {



render(){
  return (
    <div>
      <NavBar />
      {/* <div className='ui divider'></div> */}
      <div className='ui container'>
        <GifListContainer />
      </div>
    </div>
  )}
}

export default App
