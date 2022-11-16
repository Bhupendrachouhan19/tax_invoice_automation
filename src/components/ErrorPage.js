import React from "react";
import {Link} from 'react-router-dom';
function ErrorPage() {
  return (
    <>
      <section className="hero-section">
        <h1>Sorry ! Page not found </h1>
        <p><Link to='/'> Go to Home</Link> </p>
      </section>
    </>
  );
}

export default ErrorPage;
