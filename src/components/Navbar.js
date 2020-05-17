import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = ({ isAuthenticated }) => {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <Link to="/" className="brand-logo">
          Bundle Cloth
        </Link>

        <ul className="right right hide-on-med-and-down">
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="material-icons left prefix">shopping_cart</i>My cart
            </Link>
          </li>
          <li>
            <div className="center row">
              <div className="col s12 ">
                <div className="row" id="topbarsearch">
                  <div className="input-field col s6 s12 ">
                    <i className="material-icons prefix">search</i>
                    <input type="text" placeholder="Search Product.." />
                  </div>
                </div>
              </div>
            </div>
          </li>
          {isAuthenticated ? (
            <li>
              <Link to="/logout" className="waves-effect waves-light btn">
                Logout
              </Link>
            </li>
          ) : (
            <Fragment>
              <li>
                <Link to="/register" className="waves-effect waves-light btn">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/login" className="waves-effect waves-light btn">
                  Login
                </Link>
              </li>{" "}
            </Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Navbar);
