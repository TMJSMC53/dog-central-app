import React from 'react';

export default function Hero() {
  return (
    <section className="hero-container">
      <h1 className="fs-750 fw-bold text-primary">
        Welcome to
        <span className="d-block text-primary fw-bold">
          Dog
          <span className="central">Central</span>
        </span>
      </h1>
      <img className="banner-img" src="/images/DC.jpeg" alt="women with dogs" />
    </section>
  );
}
