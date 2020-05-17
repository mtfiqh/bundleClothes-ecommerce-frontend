import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProducts } from "../actions/productAction";
import CircularProgressIndicator from "./CircularProgressIndicator";
import SuccessIcon from "./SuccessIcon";
import FailedIcon from "./FailedIcon";
import CartItem from "./CartItem";

const Carts = ({ loading, isSuccess, products, cart, getProducts }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <Fragment>
      <h3 className="center">
        Cart{" "}
        {loading ? (
          <CircularProgressIndicator />
        ) : isSuccess ? (
          <SuccessIcon />
        ) : (
          <FailedIcon />
        )}
      </h3>
      <div className="row">
        {cart.length > 0 ? (
          cart.map((productId, index) => {
            const product = products.find(
              (product) => product._id === productId
            );
            return product === undefined ? (
              ""
            ) : (
              <div key={index} className="col-lg-3 col-md-4 col-sm-5 p-1">
                <CartItem product={product} />
              </div>
            );
          })
        ) : (
          <div className="col text-center">
            <h4>Empty</h4>
          </div>
        )}
      </div>
    </Fragment>
  );
};

Carts.propTypes = {
  loading: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  products: PropTypes.array.isRequired,
  cart: PropTypes.array.isRequired,
  getProducts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.product.loading,
  isSuccess: state.product.isSuccess,
  products: state.product.products,
  cart: state.product.cart,
});

export default connect(mapStateToProps, { getProducts })(Carts);
