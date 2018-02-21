import React from "react";
import { connect } from "react-redux";
import NVD3Chart from "react-nvd3";
import "./job-progression-avg.css";

export class JobProgressionAvg extends React.Component {
  render() {
    var ranges = [
      Math.random() * 10,
      Math.random() * 20 + 10,
      Math.random() * 20 + 30
    ];

    var datum = {
      title: "A",
      subtitle: "B",
      ranges: ranges,
      measures: [Math.random() * ranges[2]],
      markers: [Math.random() * ranges[2]]
    };

    return (
      <div className="job-progression-avg">
        <NVD3Chart
          id="jobProgressionAvg"
          type="bulletChart"
          datum={datum}
          // x="label"
          // y="value"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  jobs: state.jobs
});

export default connect(mapStateToProps)(JobProgressionAvg);
