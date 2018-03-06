import React from "react";
import { connect } from "react-redux";
import NavBar from "../navbar";
import JobForm from "../page-components/job-form";
import { fetchJobById, editJob } from "../../actions/protected-data";
import "./job-form-page.css";

export class EditJobPage extends React.Component {
  componentDidMount() {
    this.jobId = this.props.match.params.jobid;
    if (this.jobId) {
      this.props.dispatch(fetchJobById(this.props.match.params.jobid));
    }
  }

  onSubmit(values) {
    values.keywords = values.keywordsinput.split(",");
    this.props.dispatch(editJob(values));
    return this.props.history.push("/dashboard");
  }

  render() {
    let links = ["Stats", "Dashboard"];
    return (
      <div className="add-job-page">
        <NavBar links={links} />
        <div className="add-job-container">
          <JobForm
            title="Edit Job"
            existingValues={this.props.currentJob}
            onSubmit={values => this.onSubmit(values)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  currentJob: state.protectedData.currentJob
});

export default connect(mapStateToProps)(EditJobPage);
