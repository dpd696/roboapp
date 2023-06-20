import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      <h2>Robo-&#129302;-Friends</h2>
      <img src={`https://robohash.org/${id}?set=set3 `} alt="robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
