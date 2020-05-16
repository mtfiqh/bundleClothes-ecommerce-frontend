import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FormProductAdd from "./components/FormProductAdd";
import CircularProgressIndicator from "../CircularProgressIndicator";
import SuccessIcon from "../SuccessIcon";
import FailedIcon from "../FailedIcon";

const ProductAdd = ({ loading, isSuccess }) => {
  return (
    <Fragment>
      <h1 className="text-dark">
        Add Product{" "}
        {loading ? (
          <CircularProgressIndicator />
        ) : isSuccess ? (
          <SuccessIcon />
        ) : (
          <FailedIcon />
        )}
      </h1>
      <FormProductAdd />
    </Fragment>
  );
};

ProductAdd.propTypes = {
  loading: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.adminProduct.loading,
  isSuccess: state.adminProduct.isSuccess,
});

export default connect(mapStateToProps)(ProductAdd);
