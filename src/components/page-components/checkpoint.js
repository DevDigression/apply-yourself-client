import React from "react";
import { deleteCheckpoint } from "../../actions/protected-data";
import "../pages/single-job.css";

export default class Checkpoint extends React.Component {
  render() {
    let stage = this.props.checkpoint.stage;
    let titles = [
      "1. Resume / Cover Letter Sent",
      "2. Phone Screen",
      "3. First Interview (Culture Fit)",
      "4. Coding Challenge",
      "5. Technical Interview",
      "6. Onsite Interview",
      "7. Job Offer"
    ];
    return (
      <div className="checkpoint">
        <h5>{titles[stage - 1]}</h5>
        <p>{this.props.checkpoint.content}</p>
        <button
          onClick={() => {
            if (
              window.confirm(
                `Are you sure that you want to delete this checkpoint?`
              )
            ) {
              this.props.dispatch(
                deleteCheckpoint({
                  jobid: this.props.jobid,
                  checkpointid: this.props.checkpointid
                })
              );
              return this.props.history.push(`/job/${this.props.jobid}`);
            }
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}
