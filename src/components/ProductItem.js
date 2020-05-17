import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { PRICE } from "../constants/GeneralConst";
import { addProductToCart } from "../actions/productAction";

const ProductItem = ({ product: { _id, images, title }, addProductToCart }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={images[0]} alt={title} />
        <span className="card-title">{title}</span>
        <span
          to="/"
          className="btn-floating halfway-fab waves-effect waves-light red"
          onClick={() => addProductToCart(_id)}
        >
          <i className="material-icons">add_shopping_cart</i>
        </span>
      </div>

      <div className="card-content">
        <p></p>
        <p>
          <b>Price: Rp.{PRICE}</b>
        </p>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  addProductToCart: PropTypes.func.isRequired,
};

export default connect(null, { addProductToCart })(ProductItem);
