import React from "react";
import { connect } from "react-redux";
import requiresLogin from "../requires-login";
import { fetchProtectedData } from "../../actions/protected-data";
import NavBar from "../navbar";
import "./stats.css";

export default class Stats extends React.Component {
  render() {
    let links = ["Dashboard"];

    return (
      <div className="stats">
        <NavBar links={links} />
        <div className="progression-avg">
          <h3>Average Jobs Progression</h3>
          <div className="progression-graph">
            <img src="http://nvd3.org/examples/img/bullet.png" />
          </div>
        </div>
        <div className="stages">
          <h3>Jobs at Each Stage</h3>
          <div className="stages-graph">
            <img src="http://codesuki.github.io/react-d3-components/piechart.png" />
          </div>
          <div className="stages-list">
            <ul>
              <li>Applied: 17</li>
              <li>Callback: 3</li>
              <li>Technical Interview: 2</li>
              <li>Onsite Interview: 1</li>
              <li>Total: 23</li>
            </ul>
          </div>
        </div>
        <div className="skills">
          <h3>Desired Skills</h3>
          <div className="skills-graph">
            <img src="https://jrue.github.io/assets/images/exercise_images/barchart.jpg" />
          </div>
          <div className="skills-list">
            <ul>
              <li>Javascript: 50%</li>
              <li>Node: 20%</li>
              <li>PHP: 10%</li>
              <li>React: 20%</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
