import React from "react";

const Button = ({ name }) => {
  return (
    <button
      style={{
        padding: "10px",
        background: "blue",
        color: "white",
        border: "none",
        borderRadius: "20px",
      }}
    >
      {name}
    </button>
  );
};

export default Button;
