import React from "react";
import { deleteCheckpoint } from "../../actions/protected-data";
import "../pages/single-job.css";            

export default class Checkpoint extends React.Component {

  render() {
  	console.log(this.props);
    return (
      <div className="checkpoint">
        <h5>1. Resume Sent</h5>
          <p>Cover letter included:</p>
          <p>Dear Hiring Manager ...</p>
          <button
              onClick={() => {
                if (
                  window.confirm(
                    `Are you sure that you want to delete this checkpoint?`
                  )
                ) {
                  this.props
                    .dispatch(deleteCheckpoint(this.props.checkpoint))
                    .then(() => this.props.history.push('/dashboard'));
                }
              }}
            >
              Delete Checkpoint
            </button>
      </div>
      );
  }
}