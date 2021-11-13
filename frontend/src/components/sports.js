import React from "react";

const Sports = ({rePos1,rePos2,rePos3}) => {
  return (
    <>
      <div className="contentSpo">
        <img className="imgSSpo" src={rePos2} alt="pic"></img>
        <p className="headingsSpo">{rePos1}</p>
        <a className="readingSpo" href={rePos3}>
          Continue to read...
        </a>
      </div>
    </>
  );
};
export default Sports;
