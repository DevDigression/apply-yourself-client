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
    if (values.keywords.length > 0) {
      values.keywords = values.keywords.split(",");
    }
    if (values.contact === "") {
      values.contact = "N/A";
    }
    if (values.deadline == null) {
      values.deadline = "N/A";
    }
    // if (values.image === "") {
    //   values.image = "https://image.flaticon.com/icons/png/512/744/744422.png";
    // }
    this.props.dispatch(editJob(values));
    return this.props.history.push("/dashboard");
  }

  render() {
    let links = ["Stats", "Dashboard"]; // TODO do you need to change this?
    return (
      <div className="add-job-page">
        <NavBar links={links} />
        <div className="add-job-container">
          <JobForm
            title="Edit Job"
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

export default connect(mapStateToProps)(EditJobPage);
