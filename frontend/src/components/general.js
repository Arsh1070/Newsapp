import React from "react";

const General = ({rePos1,rePos2,rePos3}) => {
  return (
    <>
      <div className="contentGen">
        <img className="imgSGen" src={rePos2} alt="pic"></img>
        <p className="headingsGen">{rePos1}</p>
        <a className="readingGen" href={rePos3}>
          Continue to read...
        </a>
      </div>
    </>
  );
};
export default General;
