import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import FormLogin from "./components/FormLogin";
import CircularProgressIndicator from "../CircularProgressIndicator";
import SuccessIcon from "../SuccessIcon";
import FailedIcon from "../FailedIcon";

const Login = ({ loading, isSuccess, isAuthenticated }) => {
  return isAuthenticated ? (
    <Redirect to="/admin" />
  ) : (
    <div className="row align-items-center h-100 mx-3">
      <div className="col-md-6 col-lg-4 col-xl-3 mx-auto">
        <div className="card shadow">
          <div className="card-body">
            <h5 className="card-title text-center mb-3">
              <Link to="/" className="text-dark">
                Admin Login{" "}
                {loading ? (
                  <CircularProgressIndicator />
                ) : isSuccess ? (
                  <SuccessIcon />
                ) : (
                  <FailedIcon />
                )}
              </Link>
            </h5>
            <FormLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  loading: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.adminAuth.loading,
  isSuccess: state.adminAuth.isSuccess,
  isAuthenticated: state.adminAuth.isAuthenticated,
});

export default connect(mapStateToProps)(Login);
