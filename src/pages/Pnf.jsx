import React from "react";
import { Link } from "react-router-dom";
import "./Pages.css"; 

function Pnf() {
  return (
    <div className="pnf-container">
      <div className="pnf-content">
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-subtitle">Oops! Page Not Found</h2>
        <p className="pnf-text">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link to="/" className="pnf-button">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default Pnf;