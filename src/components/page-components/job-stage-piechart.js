import React from "react";
import { connect } from "react-redux";
import NVD3Chart from "react-nvd3";
import "../pages/stats.css";

export class JobStagePieChart extends React.Component {
  calculateData(stages) {
    let jobStages = this.props.jobStages;

    let data = [
      { key: "1", y: jobStages[1] },
      { key: "2", y: jobStages[2] },
      { key: "3", y: jobStages[3] },
      { key: "4", y: jobStages[4] },
      { key: "5", y: jobStages[5] },
      { key: "6", y: jobStages[6] },
      { key: "7", y: jobStages[7] }
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
