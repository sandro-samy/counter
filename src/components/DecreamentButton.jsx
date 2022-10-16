import React from "react";

const DecreamentButton = ({ decreament }) => {
  return (
    <button
      onClick={decreament}
      className="btn btn-primary text-capitalize me-5"
    >
      decreament
    </button>
  );
};

export default DecreamentButton;
