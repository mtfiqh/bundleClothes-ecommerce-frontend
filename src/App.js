import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import Jumbotron from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Jumbotron/>
        <Product/>
        <Footer/>
      </div>
    );
  }
}

export default App;
