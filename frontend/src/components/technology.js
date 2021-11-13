import React from 'react'

const Technology= ({rePos1,rePos2,rePos3})=>{
    return (
      <>
        <div className="contentTec">
          <img className="imgSTec" src={rePos2} alt="pic"></img>
          <p className="headingsTec">{rePos1}</p>
          <a className="readingTec" href={rePos3}>
            Continue to read...
          </a>
        </div>
      </>
    );
}
export default Technology;