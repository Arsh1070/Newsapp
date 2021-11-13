import React from "react";

const TopNews = ({ rePos1, rePos2, rePos3 }) => {
  return (
    <>
      <div className="content">
        <img className="imgS" src={rePos2} alt="pic"></img>
        <p className="headings">{rePos1}</p>
        <a className="reading" href={rePos3}>
          Continue to read...
        </a>
      </div>
    </>
  );
};

export default TopNews;
