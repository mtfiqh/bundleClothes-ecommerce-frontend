import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Bundle Clothes</h5>
              <p className="grey-text text-lighten-4">
                Bundle Clothes is an online store that sells clothes in a
                bundle.
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Knowledge</h5>
              <ul>
                <li>
                  <Link to="/Account" className="grey-text text-lighten-3">
                    Account
                  </Link>
                </li>
                <li>
                  <Link to="/Procesed" className="grey-text text-lighten-3">
                    My Order
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2020 Bundle Clothes
           
          </div>
        </div>
      </footer>
    );
  }
}
