import React from "react";
import UnderConstruction from "../../images/under_construction.jpg";

class Project extends React.Component {
  render() {
    return (
      <div className="ui card">
        <div className="image">
          <img src={UnderConstruction} alt="Under Construction" />
        </div>
        <div className="content">
          <div className="header">Steve Jobes</div>
          <div className="meta">
            <p>Last Seen 2 days ago</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
