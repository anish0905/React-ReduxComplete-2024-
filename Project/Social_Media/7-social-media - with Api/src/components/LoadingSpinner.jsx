import React from "react";

const LoadingSpinner = () => {
  return (
    <div>
      <div className="d-flex justify-content-center spinner">
        <div
          className="spinner-border"
          role="status"
          style={{ width: "4rem", height: "4rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
