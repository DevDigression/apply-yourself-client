import React from "react";
import { connect } from "react-redux";
import NVD3Chart from "react-nvd3";

export class JobStylesLineChart extends React.Component {
  calculateData(jobs) {
    console.log(jobs);
    let datum = [
      {
        key: "Startup",
        color: "#2f80ed",
        values: []
      },
      {
        key: "Enterprise",
        color: "#333",
        values: []
      }
    ];
    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i].style == "startup") {
        datum[0].values.push([jobs[i].style, jobs[i].stage]);
      } else {
        datum[1].values.push([jobs[i].style, jobs[i].stage]);
      }
    }
    return datum;
  }
  render() {
    const data = this.calculateData(this.props.jobs);
    const xdata = function(d, i) {
      return i;
    };
    const ydata = function(d, i) {
      return d[1];
    };
    return (
      <div className="job-styles-linechart">
        <NVD3Chart
          type="linePlusBarChart"
          datum={data}
          x={xdata}
          y={ydata}
          options={{ focusEnable: false }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  jobs: state.protectedData.jobs
});

export default connect(mapStateToProps)(JobStylesLineChart);
