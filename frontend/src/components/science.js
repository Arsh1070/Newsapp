import React from "react";

const Science = ({rePos1,rePos2,rePos3}) => {
  return (
    <>
      <div className="contentSci">
        <img className="imgSSci" src={rePos2} alt="pic"></img>
        <p className="headingsSci">{rePos1}</p>
        <a className="readingSci" href={rePos3}>
          Continue to read...
        </a>
      </div>
    </>
  );
};
export default Science;
