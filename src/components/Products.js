import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProducts } from "../actions/productAction";
import ProductItem from "./ProductItem";
import CircularProgressIndicator from "./CircularProgressIndicator";
import SuccessIcon from "./SuccessIcon";
import FailedIcon from "./FailedIcon";

const Products = ({ loading, isSuccess, products, getProducts }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <Fragment>
      <h3 className="center">
        Products{" "}
        {loading ? (
          <CircularProgressIndicator />
        ) : isSuccess ? (
          <SuccessIcon />
        ) : (
          <FailedIcon />
        )}
      </h3>
      <div className="row">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 m-1">
              <ProductItem product={product} />
            </div>
          ))
        ) : (
          <div className="col text-center">
            <h4>Empty</h4>
          </div>
        )}
      </div>
    </Fragment>
  );
};

Products.propTypes = {
  loading: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  products: PropTypes.array.isRequired,
  getProducts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.product.loading,
  isSuccess: state.product.isSuccess,
  products: state.product.products,
});

export default connect(mapStateToProps, { getProducts })(Products);
