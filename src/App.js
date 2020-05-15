import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import AddressForm from './components/user/AddressForm';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
            
              <Navbar/>
                  <Switch>
                      <Route exact path="/" component={Home}/>
                      <Route path="/cart" component={Cart}/>
                      <Route path="/Login" component={Login}/>
                      <Route path="/Register" component={Register}/>
                      <Route path="/AddressForm" component={AddressForm}/>
                      <Route path="*" component={Home} />
                  </Switch>
                  <Footer/>
             
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
