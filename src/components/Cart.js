import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProductCart } from "../actions/productAction";
import CartItem from "./CartItem";

const Cart = ({ cart, getProductCart }) => {
  useEffect(() => {
    getProductCart();
  }, [getProductCart]);

  return (
    <div className="container">
      <div className="cart">
        <h5>You have ordered: {cart.length}</h5>
        <ul className="collection">
          {cart.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  getProductCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.product.cart,
});

export default connect(mapStateToProps, { getProductCart })(Cart);
