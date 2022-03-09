import React from "react";

const ErrorMessage = ({ children }) => {
  return (
    <strong style={{ color: "red", fontSize: 15, padding: 40 }}>
      {children}
    </strong>
  );
};

export default ErrorMessage;
