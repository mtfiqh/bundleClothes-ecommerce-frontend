import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import FormRegister from "./components/FormRegister";
import CircularProgressIndicator from "../CircularProgressIndicator";
import SuccessIcon from "../SuccessIcon";
import FailedIcon from "../FailedIcon";

const Register = ({ loading, isSuccess }) => {
  return (
    <div className="row align-items-center h-100 mx-3">
      <div className="col-md-6 col-lg-4 col-xl-3 mx-auto">
        <div className="card shadow">
          <div className="card-body">
            <h5 className="card-title text-center mb-3">
              <Link to="/admin" className="text-dark">
                Admin Register{" "}
                {loading ? (
                  <CircularProgressIndicator />
                ) : isSuccess ? (
                  <SuccessIcon />
                ) : (
                  <FailedIcon />
                )}
              </Link>
            </h5>
            <FormRegister />
          </div>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  loading: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.adminAuth.loading,
  isSuccess: state.adminAuth.isSuccess,
});

export default connect(mapStateToProps)(Register);
