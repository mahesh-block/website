import React from "react";
import Card from "./Card";
import Details from "./Details.json";
import "../../resources/card.css";
class OurTeam extends React.Component {
  render() {
    return (
      <div className="carddetails">
        {Details.map((employeeDetail, index) => {
          return <Card key={employeeDetail.id}>{employeeDetail}</Card>;
        })}
      </div>
    );
  }
}

export default OurTeam;
