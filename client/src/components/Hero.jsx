import React from "react";

export default function Hero() {
  return (
    <section className="hero-container">
      <h1 className="fs-750 fw-bold text-primary">
        Welcome to{" "}
        <span className="d-block text-primary fw-bold">Dog Central</span>
      </h1>
      <img
        className="banner-img"
        src="https://img.freepik.com/free-vector/friend-walking-with-pets-meeting-waving-hello-women-with-dog-cat-outside-flat-illustration_74855-10668.jpg?w=2000"
        alt="women with dogs"
      />
    </section>
  );
}
