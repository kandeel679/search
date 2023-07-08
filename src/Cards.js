import React from "react";

const Card = (props) => {
  return (
    <div className="tc dib Color br3 pa3 ma2 bw2 shadow-5 grow">
      <img alt="people" src={`https://robohash.org/${props.id}.png`} />
      <div>
        <h1>{props.name}</h1>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Card;
