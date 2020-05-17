import React, { useEffect, useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentUser } from "../actions/authAction";
import {
  getProducts,
  addProductToCart,
  getProductCart,
  removeProductFromCart,
} from "../actions/productAction";

const Landing = ({
  loading,
  isAuthenticated,
  currentUser,
  getCurrentUser,
  products,
  cart,
  getProducts,
  addProductToCart,
  getProductCart,
  removeProductFromCart,
}) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getProductCart();
  }, [getProductCart]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  useEffect(() => {
    if (isAuthenticated) {
      getCurrentUser();
    }
  }, [isAuthenticated, getCurrentUser]);

  useEffect(() => {
    if (currentUser) {
      setUserData(currentUser);
    } else {
      setUserData({});
    }
  }, [currentUser]);

  return (
    <div>
      <h1>Welcome {userData.name}</h1>
      <p>{cart.length}</p>
      {products.map((product, index) => (
        <Fragment key={index}>
          <p>{product._id}</p>
          <button onClick={() => addProductToCart(product._id)}>
            Add to Cart
          </button>
          <button onClick={() => removeProductFromCart(product._id)}>
            Remove from Cart
          </button>
        </Fragment>
      ))}
    </div>
  );
};

Landing.propTypes = {
  loading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  currentUser: PropTypes.object,
  getCurrentUser: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  cart: PropTypes.array.isRequired,
  getProducts: PropTypes.func.isRequired,
  addProductToCart: PropTypes.func.isRequired,
  getProductCart: PropTypes.func.isRequired,
  removeProductFromCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  isAuthenticated: state.auth.isAuthenticated,
  currentUser: state.auth.currentUser,
  products: state.product.products,
  cart: state.product.cart,
});

export default connect(mapStateToProps, {
  getCurrentUser,
  getProducts,
  addProductToCart,
  getProductCart,
  removeProductFromCart,
})(Landing);
