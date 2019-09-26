import React from "react";
import "./card.styles.css";

export const Card = props => {
  const { monster } = props;
  return (
    <div className="card-container">
      <img alt="monster" src={`https://robohash.org/${monster.id}?set=set5`} />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
};
