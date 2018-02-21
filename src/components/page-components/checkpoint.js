import React from "react";
import { deleteCheckpoint } from "../../actions/protected-data";
import "../pages/single-job.css";            

export default class Checkpoint extends React.Component {

  render() {
  	console.log(this.props);
    return (
      <div className="checkpoint">
        <h5>{this.props.checkpoint.stage}</h5>
          <p>{this.props.checkpoint.content}</p>
          <button
              onClick={() => {
                if (
                  window.confirm(
                    `Are you sure that you want to delete this checkpoint?`
                  )
                ) {
                  this.props
                    .dispatch(deleteCheckpoint({
                      jobid: this.props.jobid,
                      checkpointid: this.props.checkpointid
                    }));
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