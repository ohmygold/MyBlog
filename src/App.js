import React from 'react';
import Header from './component/Header.js';
import Footer from './component/Footer.js';

class App extends React.Component {
  render () {
    return(
      <div className='wrap'>
        <Header />
        <div className='main'>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
