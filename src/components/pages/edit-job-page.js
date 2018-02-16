import React from "react";
import { connect } from "react-redux";
import NavBar from "../navbar";
import JobForm from "../page-components/job-form";
import "./add-job-page.css"; // TODO if the styles are the same, reuse them, dont create edit-job-page-css. but rename them to something that works for add + edit

export class AddJobPage extends React.Component {
  componentDidMount() {
    this.jobId = this.props.match.params.jobid;
    if (this.jobId) {
      this.props.dispatch(fetchJobById(this.props.match.params.jobid));
    }
  }

  onSubmit(values) {
    values.keywords = values.keywords.split(",");
    this.props.dispatch(editJob(values));
    return; // TODO props.history .... to redirect
  }

  render() {
    let links = ["Stats", "Dashboard"]; // TODO do you need to change this?
    return (
      <div className="add-job-page">
        <NavBar links={links} />
        <div className="add-job-container">
          <JobForm onSubmit={() => onSubmit()} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(AddJobPage);
