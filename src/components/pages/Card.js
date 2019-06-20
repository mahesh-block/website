import React from "react";
import UnderConstruction from "../../images/work_thumb_1.jpg";
import "../../resources/style.css";

const Card = props => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={UnderConstruction} alt="Avatar" className="cardheight" />
        </div>
        <div className="flip-card-back">
          <h1>{props.children.name}</h1>
          <p>
            <i className="phone icon" />
            {props.children.phone}
          </p>

          <p>
            <i className="mail icon" />
            {props.children.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
