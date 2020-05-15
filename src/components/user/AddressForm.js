import React, { Component } from 'react';

export default class AddressForm extends Component {
  render(){
    return (
        <div className="container">
        <h3 className="center">Shipping address</h3>
            <div className="col s12 z-depth-6 card-panel">
            <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input  id="first_name" type="text" className="validate"/>
          <label htmlFor="first_name" data-error="wrong" data-success="right">First Name</label>
        </div>
        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate"/>
          <label htmlFor="last_name">Last Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input  id="address_line1" type="text" className="validate"/>
          <label htmlFor="address_line1" data-error="wrong" data-success="right">Address line 1</label>
        </div>
        <div className="input-field col s6">
          <input id="address_line2" type="text" className="validate"/>
          <label htmlFor="address_line2">Address line 2</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input  id="city" type="text" className="validate"/>
          <label htmlFor="city" data-error="wrong" data-success="right">City</label>
        </div>
        <div className="input-field col s6">
          <input id="postal_code" type="text" className="validate"/>
          <label htmlFor="postal_code">Postal Code</label>
        </div>
      </div>

      <div className="row">
      <label>
        <input type="checkbox" />
        <span>Gunakan alamat ini sebagai alamat utama</span>
      </label>
      </div>
      
      <button class="waves-effect waves-light btn">Save</button>
    </form>
            </div>
        </div>
        );
    }
 }