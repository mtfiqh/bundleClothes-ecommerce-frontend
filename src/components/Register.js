import React, { Component } from 'react';

export default class Register extends Component {
  render() {
    return (
        <div className="container">
        <h3 className="center">Register</h3>
                <div id="login-page" class="row">
    <div className="col s12 z-depth-6 card-panel">
      <form className="login-form">

      <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">perm_identity</i>
            <input className="validate" id="name" type="text"/>
            <label for="name" data-error="wrong" data-success="right">Nama</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">mail_outline</i>
            <input className="validate" id="email" type="email"/>
            <label for="email" data-error="wrong" data-success="right">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">lock_outline</i>
            <input id="password" type="password"/>
            <label for="password">Password</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <a href="#!" className="btn waves-effect waves-light col s12">Register</a>
          </div>
        </div>

      </form>
    </div>
  </div>
    </div>
    
    );
  }
}

