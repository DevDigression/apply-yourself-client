import React from "react";
import { connect } from "react-redux";
import NavBar from "../navbar";
import JobForm from "../page-components/job-form";
import { addJob, clearJobData } from "../../actions/protected-data";
import "./job-form-page.css";

export class AddJobPage extends React.Component {
  componentDidMount() {
    let clearJob = {
      title: "",
      company: "",
      posting: "",
      image: "",
      contact: "",
      priority: 0,
      style: "",
      keywords: [],
      keywordsinput: "",
      notes: [],
      date: "",
      stage: "",
      completion: "",
      checkpoints: [],
      id: ""
    };
    this.props.dispatch(clearJobData(clearJob));
  }

  onSubmit(values) {
    values.keywords = values.keywordsinput.split(",");
    values.keywords = values.keywords.map(keyword => keyword.trim());
    this.props.dispatch(addJob(values));
    return this.props.history.push("/dashboard");
  }

  render() {
    let links = ["Stats", "Dashboard"];
    return (
      <div className="add-job-page">
        <NavBar links={links} />
        <div className="add-job-container">
          <JobForm title="Add Job" onSubmit={values => this.onSubmit(values)} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(AddJobPage);
