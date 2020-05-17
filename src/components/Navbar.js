import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getProductCart } from "../actions/productAction";
import { APP_NAME } from "../constants/GeneralConst";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = ({ isAuthenticated, cart, getProductCart }) => {
  useEffect(() => {
    getProductCart();
  }, [getProductCart]);

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top shadow">
      <div className="container">
        <Link className="navbar-brand" to="/">
          {APP_NAME}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">
                Home
              </NavLink>
            </li>

            {isAuthenticated ? (
              <Fragment>
                <li className="nav-item">
                  <NavLink exact to="/cart" className="nav-link">
                    {cart.length}
                    <i className="fas fa-shopping-cart"></i>
                  </NavLink>
                </li>
                <ProfileDropdown />
              </Fragment>
            ) : (
              <li className="nav-item">
                <NavLink exact to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  cart: PropTypes.array.isRequired,
  getProductCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  cart: state.product.cart,
});

export default connect(mapStateToProps, { getProductCart })(Navbar);
