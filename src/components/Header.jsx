import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './css/styles.css';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

export default class Header extends Component {
  state ={
    sign:false,
    login:false,
  };

  onOpenModalSign=() =>{
    this.setState({sign:true});
  };

  onCloseModalSign=() => {
    this.setState({sign: false});
  };

  onOpenModalLogin=() =>{
    this.setState({login:true});
  };

  onCloseModalLogin=() => {
    this.setState({login: false});
  };

    render() {
      const {sign, login} = this.state;
      return (
        <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
        <a className="navbar-brand" href="/">LOGO</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/contact">Action</Link>
                <a className="dropdown-item" href="/">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/">Disabled</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
         
          <ul className="nav navbar-nav navbar-right">
                                     <li>
                                        <button className="btn btn-outline-primary my-2 my-sm-0" id="signup" onClick={this.onOpenModalSign}>SignUp</button>
                                    </li>
                                    <li>
                                        <button className="btn btn-primary-outline" id="login" onClick={this.onOpenModalLogin}>Login</button>
                                    </li>
            </ul>

        </div>
      </nav>
      {/* SignUp Start */}
      <Modal open={sign} onClose={this.onCloseModalSign}>
                    <div className="modal-body">
                        <h2>Mulai sekarang untuk mendaftar<span> Gratis!</span></h2>
                        <span className="subtitle">Nikmati promo terbaik</span>
                        <form className="contact-form form-validate3" noValidate="novalidate">
                            <div className="form-group">
                                <input className="form-control" type="text" name="name" id="name" placeholder="First Name" required="" autoComplete="off" aria-required="true" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="email" name="email" placeholder="E-mail" required="" autoComplete="off" aria-required="true" />
                            </div>
                            <div className="form-group">
                                <input type="password" name="pass" className="form-control" placeholder="Password" required="" autoComplete="off" aria-required="true" />
                            </div>
                            <input className="btn btn-md btn-primary btn-center" id="sign_up" type="button" value="Sign Up" />
                        </form>
                    </div>
                </Modal>

                {/* <!-- signUp End -->
                  <!-- login --> */}

                <Modal open={login} onClose={this.onCloseModalLogin}>
                
                    <div className="modal-body">
                        <h2>Login dan <span>Belanja sekarang</span></h2>
                        <span className="subtitle">Silahkan inputkan password dan email anda</span>
                        <form className="contact-form form-validate4" noValidate="novalidate">
                            <div className="form-group">
                                <input className="form-control" type="email" name="email" placeholder="E-mail" required="" autoComplete="off" aria-required="true" />
                            </div>
                            <div className="form-group">
                                <input type="password" name="pass" className="form-control" placeholder="Password" required="" autoComplete="off" aria-required="true" />
                            </div>
                            <input className="btn btn-md btn-primary btn-center" id="login_btn" type="button" value="Login" />
                        </form>
                    </div>
                </Modal>
                {/*<!-- Login End --> */}
      </div>
      );
    }
  }
