import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { PRICE } from "../constants/GeneralConst";
import { addProductToCart } from "../actions/productAction";
import Rating from "./Rating";
import CircularProgressIndicator from "./CircularProgressIndicator";

const ProductItem = ({
  isAuthenticated,
  product: { _id, images, title, rating },
  loading,
  addProductToCart,
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
          {isAuthenticated ? (
            <div className="row my-1">
              <div className="col">
                <button
                  type="button"
                  className="btn btn-block btn-primary"
                  onClick={() => addProductToCart(_id)}
                  disabled={loading}
                >
                  {loading ? (
                    <CircularProgressIndicator />
                  ) : (
                    <i className="fas fa-cart-plus"></i>
                  )}
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  loading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  addProductToCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.product.loading,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { addProductToCart })(ProductItem);
