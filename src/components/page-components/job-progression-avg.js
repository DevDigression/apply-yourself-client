import React from "react";
import { connect } from "react-redux";
import NVD3Chart from "react-nvd3";
import "./job-progression-avg.css";

export class JobProgressionAvg extends React.Component {
  render() {
    let numberOfJobs = this.props.jobNumberTotal;
    let jobProgressionTotal = this.props.jobProgressionTotal;

    var ranges = [1, 2, 3, 4, 5, 6, 7];
    var datum = {
      // title: "Progression",
      // subtitle: "Stages: ",
      ranges: ranges,
      measures: [jobProgressionTotal / numberOfJobs]
      // markers: [jobProgressionTotal / numberOfJobs]
    };

    return (
      <div className="job-progression-avg">
        <NVD3Chart
          id="jobProgressionAvg"
          type="bulletChart"
          datum={datum}
          // x="label"
          // y="value"
          tooltip={{ enabled: true }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  jobs: state.protectedData.jobs
});

export default connect(mapStateToProps)(JobProgressionAvg);
