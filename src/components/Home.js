import React from "react";
import UnderConstruction from "../images/slider-2.jpg";
import Location from "../location";
import "../resources/location.css";
import Stats from "./pages/Stats";
class Home extends React.Component {
  render() {
    return (
      <div>
        <img
          className="imgconstr"
          src={UnderConstruction}
          alt="under Construction"
        />
        <Stats />
        <Location />
      </div>
    );
  }
}

export default Home;
