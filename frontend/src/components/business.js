import React from "react";

const Business = ({rePos1,rePos2,rePos3}) => {
  return (
    <>
      <div className="contentBus">
        <img className="imgSBus" src={rePos2} alt="pic"></img>
        <p className="headingsBus">{rePos1}</p>
        <a className="readingBus" href={rePos3}>
          Continue to read...
        </a>
      </div>
    </>
  );
};
export default Business;
