import React from "react";

const Health = ({rePos1,rePos2,rePos3}) => {
  return (
    <>
      <div className="contentHea">
        <img className="imgSHea" src={rePos2} alt="pic"></img>
        <p className="headingsHea">{rePos1}</p>
        <a className="readingHea" href={rePos3}>
          Continue to read...
        </a>
      </div>
    </>
  );
};
export default Health;