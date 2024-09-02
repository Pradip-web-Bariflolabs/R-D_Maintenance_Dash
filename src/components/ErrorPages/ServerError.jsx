import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ServerError = () => {
  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="display-1 text-danger fw-bold">500</h1>
      <h2 className="mb-3">Internal Server Error</h2>
      <p className="mb-4">Sorry, something went wrong on our end. Please try again later.</p>
      <a href="/" className="btn btn-primary">Go Back to Home</a>
    </div>
  );
};

export default ServerError; 
