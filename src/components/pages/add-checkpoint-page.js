import React from "react";
import { connect } from "react-redux";
import NavBar from "../navbar";
import CheckpointForm from "../page-components/checkpoint-form";
import { addCheckpoint, fetchJobById } from "../../actions/protected-data";
import "./checkpoint-form-page.css";

export class AddCheckpointPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchJobById(this.props.match.params.jobid));
  }

  onSubmit(values) {
    values.jobid = this.props.match.params.jobid;
    this.props.dispatch(addCheckpoint(values));
    return this.props.history.push(`/job/${this.props.match.params.jobid}`);
  }

  render() {
    console.log(this.props);
    let links = ["Stats", "Dashboard"];
    return (
      <div className="add-checkpoint-page">
        <NavBar links={links} />
        <div className="add-checkpoint-container">
          <CheckpointForm
            title="Add Checkpoint"
            onSubmit={values => this.onSubmit(values)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(AddCheckpointPage);
