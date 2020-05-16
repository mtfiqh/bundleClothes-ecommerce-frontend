import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FormProductEdit from "./components/FormProductEdit";
import CircularProgressIndicator from "../CircularProgressIndicator";
import SuccessIcon from "../SuccessIcon";
import FailedIcon from "../FailedIcon";

const ProductEdit = ({ match, loading, isSuccess }) => {
  const {
    params: { productId },
  } = match;

  return (
    <Fragment>
      <h1 className="text-dark">
        Edit Product{" "}
        {loading ? (
          <CircularProgressIndicator />
        ) : isSuccess ? (
          <SuccessIcon />
        ) : (
          <FailedIcon />
        )}
      </h1>
      <FormProductEdit productId={productId} />
    </Fragment>
  );
};

ProductEdit.propTypes = {
  match: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.adminProduct.loading,
  isSuccess: state.adminProduct.isSuccess,
});

export default connect(mapStateToProps)(ProductEdit);
