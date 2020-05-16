import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { deleteProduct } from "../../actions/admin/adminProductAction";
import CircularProgressIndicator from "../CircularProgressIndicator";

const ProductDelete = ({ match, loading, isSuccess, deleteProduct }) => {
  const {
    params: { productId },
  } = match;

  useEffect(() => {
    deleteProduct(productId);
  }, [deleteProduct, productId]);

  return (
    <Fragment>
      {loading ? (
        <CircularProgressIndicator />
      ) : isSuccess ? (
        <Redirect to="/admin/products" />
      ) : (
        <Redirect to="/admin/products" />
      )}
    </Fragment>
  );
};

ProductDelete.propTypes = {
  match: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  deleteProduct: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.adminProduct.loading,
  isSuccess: state.adminProduct.isSuccess,
});

export default connect(mapStateToProps, { deleteProduct })(ProductDelete);
