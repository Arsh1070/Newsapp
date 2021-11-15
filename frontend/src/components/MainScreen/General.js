import React from "react";

const General = ({ gen }) => {
  return (
    <>
      {gen.map((item, index) => {
        return (
          <div className="contentGen">
            <img className="imgSGen" src={item.urlToImage} alt="pic"></img>
            <p className="headingsGen" key={item.index}>
              {item.title}
            </p>
            <a className="readingGen" href={item.url}>
              Continue to read...
            </a>
          </div>
        );
      })}
    </>
  );
};
export default General;
