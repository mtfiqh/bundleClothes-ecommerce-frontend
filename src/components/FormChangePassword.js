import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { udpateUser } from "../actions/authAction";

const FormChangePassword = ({ currentUser, loading, udpateUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }
  }, [currentUser]);

  const onSubmit = (e) => {
    e.preventDefault();
    udpateUser(name, email, password, newPassword);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          id="password"
          name="password"
          className="form-control"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          id="newPassword"
          name="newPassword"
          className="form-control"
          placeholder="New Password"
          onChange={(e) => setNewPassword(e.target.value)}
          value={newPassword}
        />
      </div>
      <div className="text-right">
        <button type="submit" className="btn btn-primary" disabled={loading}>
          Register
        </button>
      </div>
    </form>
  );
};

FormChangePassword.propTypes = {
  loading: PropTypes.bool.isRequired,
  currentUser: PropTypes.object,
  udpateUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps, { udpateUser })(FormChangePassword);
