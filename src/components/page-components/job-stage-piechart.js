import React from "react";
import { connect } from "react-redux";
import NVD3Chart from "react-nvd3";
import "../pages/stats.css";

export class JobStagePieChart extends React.Component {
  calculateData(stages) {
    let jobs = this.props.jobs;
    let jobData = {};

    jobs.forEach(job => {
      if (!jobData[job.stage]) {
        jobData[job.stage] = 1;
      } else {
        jobData[job.stage]++;
      }
    });
    console.log(jobData);
    let data = [
      { key: "1", y: jobData[1] },
      { key: "2", y: jobData[2] },
      { key: "3", y: jobData[3] },
      { key: "4", y: jobData[4] },
      { key: "5", y: jobData[5] },
      { key: "6", y: jobData[6] },
      { key: "7", y: jobData[7] }
      // { key: "Total", y: 35 }
    ];
    return data;
  }

  render() {
    const datum = this.calculateData(this.props.stages);
    return (
      <div className="job-stage-piechart">
        <NVD3Chart
          id="chart"
          height={350}
          // width={400}
          type="pieChart"
          datum={datum}
          x="key"
          y="y"
          tooltip={{ enabled: false }}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  jobs: state.protectedData.jobs
});
export default connect(mapStateToProps)(JobStagePieChart);
