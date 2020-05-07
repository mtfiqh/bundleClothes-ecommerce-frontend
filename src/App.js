import React, { Component } from 'react';
import '../src/components/css/style.css'
import Header from '../src/components/Header';
import Jumbo from '../src/components/Jumbo';
import Product from '../src/components/Product';


class App extends Component {
  render() {
  return (
    <div className="App">
    <Header />

    <div style={{"margin-top":"200px"}}>
     <Jumbo/>
     <hr/>
     <div className="title" >Product</div>
     <br/>
     <Product/>
     <Product/>
     <Product/>
     <Product/>
     <Product/>
     <Product/>
     <Product/>
    </div>
  </div>
  );
  }
}

export default App;
