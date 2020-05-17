import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { PRICE } from "../constants/GeneralConst";
import { removeProductFromCart } from "../actions/productAction";
import Rating from "./Rating";
import CircularProgressIndicator from "./CircularProgressIndicator";

const CartItem = ({
  loading,
  product: { _id, images, title, rating },
  removeProductFromCart,
}) => {
  return (
    <div className="card shadow">
      <img
        src={images[0]}
        className="card-img-top rounded"
        alt="Product"
        style={{ height: "256px" }}
      />
      <div
        className="card-img-overlay rounded text-white d-flex flex-column"
        style={{ backgroundColor: "#66666650" }}
      >
        <h5 className="card-title">{title}</h5>

        <div className="mt-auto">
          <div className="row my-1">
            <div className="col">Rp.{PRICE}</div>
          </div>
          <div className="row my-1">
            <div className="col">
              <Rating value={rating} />
            </div>
          </div>
          <div className="row my-1">
            <div className="col">
              <button
                type="button"
                className="btn btn-block btn-outline-danger"
                onClick={() => removeProductFromCart(_id)}
                disabled={loading}
              >
                {loading ? (
                  <CircularProgressIndicator />
                ) : (
                  <i className="fas fa-cart-arrow-down"></i>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  loading: PropTypes.bool.isRequired,
  product: PropTypes.object.isRequired,
  removeProductFromCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.product.loading,
});

export default connect(mapStateToProps, { removeProductFromCart })(CartItem);
