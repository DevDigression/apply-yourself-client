import React from "react";
import { connect } from "react-redux";
import NVD3Chart from "react-nvd3";

export class JobProgressionSingle extends React.Component {
  render() {
    let currentCheckpoint = this.props.currentCheckpoint;

    var ranges = [1, 2, 3, 4, 5, 6, 7];
    var datum = {
      ranges: ranges,
      measures: [currentCheckpoint]
    };

    return (
      <div className="job-progression-single">
        <NVD3Chart
          id="jobProgressionSingle"
          type="bulletChart"
          datum={datum}
          tooltip={{ enabled: false }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentJob: state.protectedData.currentJob
});

export default connect(mapStateToProps)(JobProgressionSingle);
