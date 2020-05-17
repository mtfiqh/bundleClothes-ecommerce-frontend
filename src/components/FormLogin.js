import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../actions/authAction";

const FormLogin = ({ loading, login }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    login("indonesianserver01@gmail.com", "Agung-14116104@");
  };

  return (
    <form onSubmit={onSubmit}>
      <button type="submit" disabled={loading}>
        Submit
      </button>
    </form>
  );
};

FormLogin.propTypes = {
  loading: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { login })(FormLogin);
