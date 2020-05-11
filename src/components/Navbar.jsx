import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo">
            Nocturnal
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Home</a>
            </li>
            <li>
              <a href="badges.html">About Us</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
