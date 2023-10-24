import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Register({ dispatchUser }) {
  const [appUsername, setAppUsername] = useState("");
  const [appPassword, setAppPassword] = useState("");
  const [appPasswordRepeat, setAppPasswordRepeat] = useState("");

  function handleRegisterRequest(e) {
    e.preventDefault();
    if (appUsername.length === 0) {
      alert("Please enter username.");
      return;
    }
    if (appPassword.length === 0 || appPasswordRepeat.length === 0) {
      alert("Please enter password.");
      return;
    }
    if (appPassword !== appPasswordRepeat) {
      alert("Both Passwords must be same");
      return;
    }
    dispatchUser({
      type: "REGISTER",
      appUsername,
      appPassword,
      appPasswordRepeat,
    });
    setAppUsername("");
    setAppPassword("");
    setAppPasswordRepeat("");
  }

  function handleChangeAppUsername(e) {
    setAppUsername(e.target.value);
  }

  function handleChangeAppPassword(e) {
    setAppPassword(e.target.value);
  }

  function handleChangeAppPasswordRepeat(e) {
    setAppPasswordRepeat(e.target.value);
  }

  return (
    <div className="container">
      <hr></hr>
      <form onSubmit={handleRegisterRequest}>
        <h1>Register</h1>
        <div className="row">
          <div className="col-md-3">
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                name="register-username"
                id="register-username"
                onChange={handleChangeAppUsername}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="register-password"
                id="register-password"
                onChange={handleChangeAppPassword}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                name="register-password-repeat"
                id="register-password-repeat"
                onChange={handleChangeAppPasswordRepeat}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-md-3">
            <br />
            <input type="submit" value="Register" className="mt-2" />
          </div>
        </div>
      </form>
    </div>
  );
}
