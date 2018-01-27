import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robot, i) => (
        <Card
          key={Math.floor(Math.random() * 100)}
          id={robots[i].id}
          name={robots[i].name}
          email={robots[i].email}
        />
      ))}
    </div>
  );
};

export default CardList;
