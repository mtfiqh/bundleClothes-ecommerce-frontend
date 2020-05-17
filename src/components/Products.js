import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProducts } from "../actions/productAction";
import ProductItem from "./ProductItem";

const Products = ({ products, getProducts }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <Fragment>
      <h3 className="center">Products</h3>
      <div className="box">
        {products.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
    </Fragment>
  );
};

Products.propTypes = {
  products: PropTypes.array.isRequired,
  getProducts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.product.products,
});

export default connect(mapStateToProps, { getProducts })(Products);
