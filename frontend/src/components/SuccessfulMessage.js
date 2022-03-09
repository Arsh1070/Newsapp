import React from "react";

const SuccessfulMessage = ({ children }) => {
  return (
    <strong style={{ color: "green", fontSize: 15, padding: 40 }}>
      {children}
    </strong>
  );
};
export default SuccessfulMessage;
