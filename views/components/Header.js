import React from "react";

export default function Header() {
  return (
    <header className="primary-header flex container">
      <section>
        <a href="/" className="logo fw-bold text-primary">
          Dog<span className="central">Central</span>
        </a>
      </section>

      <button className="mobile-nav-toggle" aria-controls="primary-navigation">
        <span className="sr-only" aria-expanded="false"></span>
      </button>

      <nav>
        <ul
          id="primary-navigation"
          data-visible="false"
          className="primary-navigation flex"
        >
          <li className="active">
            <a className="nav-link accent-400" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link accent-400" href="#">
              About Us
            </a>
          </li>
          <li>
            <a className="nav-link accent-400" href="#">
              Contact
            </a>
          </li>

          <div className="login">
            <a
              className="btn-signup bg-dark text-accent-100"
              href="/auth/register"
            >
              Sign up
            </a>
            <br />
            <a className="btn-login" href="/auth/login">
              Login
            </a>
          </div>
        </ul>
      </nav>
    </header>
  );
}
