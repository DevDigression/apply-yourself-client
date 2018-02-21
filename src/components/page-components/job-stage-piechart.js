import React from "react";
import { connect } from "react-redux";
import NVD3Chart from "react-nvd3";
import "../pages/stats.css";

export class JobStagePieChart extends React.Component {
  calculateData(stages) {
    let data = [
      { key: "1", y: 24 },
      { key: "2", y: 4 },
      { key: "3", y: 3 },
      { key: "4", y: 1 },
      { key: "5", y: 2 },
      { key: "6", y: 1 },
      { key: "7", y: 0 }
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
  stages: state.stages
});
export default connect(mapStateToProps)(JobStagePieChart);
