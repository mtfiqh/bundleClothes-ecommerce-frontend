import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { register } from "../actions/authAction";

const FormRegister = ({ loading, register }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    register(
      "Agung Adi Purwanto",
      "indonesianserver01@gmail.com",
      "Agung-14116104@"
    );
  };

  return (
    <form onSubmit={onSubmit}>
      <button type="submit" disabled={loading}>
        Submit
      </button>
    </form>
  );
};

FormRegister.propTypes = {
  loading: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { register })(FormRegister);
