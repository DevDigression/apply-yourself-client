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
      deadline: "",
      style: "",
      keywords: [],
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
    console.log(values);
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
