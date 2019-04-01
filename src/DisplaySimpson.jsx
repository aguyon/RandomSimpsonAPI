import React from "react";

const DisplaySimpson = ({ simpson }) => {
  return (
    <div className="simpleSimpson">
      <figure>
        <img className="imgSimpson" src={simpson.image} alt={simpson.character} />
        <figcaption>
          <blockquote>{simpson.quote}</blockquote>
          <cite>{simpson.character}</cite>
        </figcaption>
      </figure>
    </div>
  );
};

export default DisplaySimpson;
