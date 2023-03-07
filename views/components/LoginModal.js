import React from "react";

export default function LoginModal() {
  return (
    <div id="login-modal" className="login-modal">
      <div className="modal">
        <div className="top-form">
          <div className="close-modal">
            <span className="fas fa-times"></span>
          </div>
        </div>
        <div className="login-form">
          <h2 className="fw-bold text-primary">LOGIN</h2>
          <span className="text-primary">
            Please enter your username and password
          </span>
          <form method="POST" action="">
            <section className="form-control">
              <div className="error" style={{ backgroundColor: "red" }}></div>
              <br />
              <input
                type="text"
                id="username"
                placeholder="Username"
                required
              />
              <br />
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
              />
              <br />
              <button
                type="submit"
                className="btn-login bg-light text-accent-100"
              >
                Login
              </button>

              <a className="register-link text-primary" href="/auth/register">
                Don't have an account? Register
              </a>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
}
