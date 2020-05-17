import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProductCart } from "../actions/productAction";
import CartItem from "./CartItem";
import Carts from "./Carts";

const Cart = ({ cart, getProductCart }) => {
  useEffect(() => {
    getProductCart();
  }, [getProductCart]);

  return (
    <main role="main" className="flex-shrink-0">
      <div className="container">
        <Carts />
      </div>
    </main>
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
