import React from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

class App extends React.Component{
  render(){
    return (
      <div>
        <Header />
        <div className = "App App-header" >
          <Body />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;