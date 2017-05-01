import React from 'react';
import Header from './component/Header.js';


class App extends React.Component {
  render () {
    return(
      <div className='wrap'>
        <Header />
        <div className='main'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App;
