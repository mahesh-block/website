import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class Stats extends Component {
  state = {
    projectStart: 0,
    projectStop: 30
  };

  percentage = () => {
    if (this.state.projectStart < this.state.projectStop) {
      this.setState({ projectStart: this.state.projectStart + 1 });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 30);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="project_wrapper">
          <Fade onReveal={() => this.percentage()}>
            <div className="project_count">
              <span> {this.state.projectStart}</span>
              <span>Projects </span>
            </div>
            <div className="project_count">
              <span> {this.state.projectStart}</span>
              <span>Years Experience </span>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Stats;
