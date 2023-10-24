import React, { useState } from "react";

export default function Login({ dispatchUser }) {
  const [appUsername, setAppUsername] = useState("");
  const [appPassword, setAppPassword] = useState("");

  function handleLoginRequest(e) {
    e.preventDefault();
    if (!appUsername.trim()) {
      alert("Please enter username");
      return;
    }
    if (!appPassword.trim()) {
      alert("Password can not be empty!");
      return;
    }
    dispatchUser({ type: "LOGIN", appUsername, appPassword });
    setAppUsername("");
    setAppPassword("");
  }

  function handleChangeAppUsername(e) {
    setAppUsername(e.target.value);
  }

  function handleChangeAppPassword(e) {
    setAppPassword(e.target.value);
  }

  return (
    <div className="container">
      <hr></hr>
      <h1>Login</h1>
      <form onSubmit={handleLoginRequest}>
        <div className="row">
          <div className="col-md-3">
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                name="login-username"
                id="login-username"
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
                name="login-password"
                id="login-password"
                onChange={handleChangeAppPassword}
                className="form-control"
              />
            </div>
          </div>

          <div className="col-md-3">
            <br />
            <input type="submit" value="Login" className="mt-2" />
          </div>
        </div>
      </form>
    </div>
  );
}
