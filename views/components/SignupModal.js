import React from "react";

export default function SignupModal() {
  return (
    <div id="login-modal" className="login-modal">
      <div className="modal">
        <div className="top-form">
          <div className="close-modal">
            <span className="fas fa-times"></span>
          </div>
        </div>
        <div className="signup-form">
          <h2 className="fw-bold text-accent-400">SIGN UP</h2>
          <span className="text-primary">
            Please enter your information below
          </span>
          <form method="POST" action="">
            <section className="form-control">
              <div className="error" style={{ backgroundColor: "red" }}></div>
              <br />

              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                required
              />
              <br />
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                required
              />
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
                className="btn-signup bg-dark text-accent-100"
              >
                Sign Up
              </button>
              <a className="register-link text-accent-400" href="/auth/login">
                Already have an account? Sign in
              </a>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
}
