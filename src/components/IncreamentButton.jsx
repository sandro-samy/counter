import React from "react";

const IncreamentButton = ({ increament }) => {
  return (
    <button
      onClick={increament}
      className="btn btn-primary text-capitalize ms-5"
    >
      increament
    </button>
  );
};

export default IncreamentButton;
