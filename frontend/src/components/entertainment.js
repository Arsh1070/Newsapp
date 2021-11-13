import React from "react";

const Entertainment = ({rePos1,rePos2,rePos3}) => {
  return (
    <>
      <div className="contentEnt">
        <img className="imgSEnt" src={rePos2} alt="pic"></img>
        <p className="headingsEnt">{rePos1}</p>
        <a className="readingEnt" href={rePos3}>
          Continue to read...
        </a>
      </div>
    </>
  );
};
export default Entertainment;
