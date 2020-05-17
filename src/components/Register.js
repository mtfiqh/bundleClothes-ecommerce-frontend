import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import FormRegister from "./FormRegister";
import CircularProgressIndicator from "./CircularProgressIndicator";
import SuccessIcon from "./SuccessIcon";
import FailedIcon from "./FailedIcon";

const Register = ({ loading, isSuccess, isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <main role="main" className="flex-shrink-0">
      <div className="container">
        <div className="row align-items-center m-3">
          <div className="col-md-6 col-lg-4 mx-auto">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title text-center mb-3">
                  Register{" "}
                  {loading ? (
                    <CircularProgressIndicator />
                  ) : isSuccess ? (
                    <SuccessIcon />
                  ) : (
                    <FailedIcon />
                  )}
                </h5>
                <FormRegister />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

Register.propTypes = {
  loading: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  isSuccess: state.auth.isSuccess,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Register);
