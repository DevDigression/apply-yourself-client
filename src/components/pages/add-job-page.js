import React from "react";
import { connect } from "react-redux";
import NavBar from "../navbar";
import JobForm from "../page-components/job-form";
import { addJob, clearJobData } from "../../actions/protected-data";
import "./add-job-page.css";

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
    values.keywords = values.keywords.split(",");
    this.props.dispatch(addJob(values));
    return this.props.history.push('/dashboard'); // TODO props.history .... to redirect
  }

  render() {
    console.log(this.props.currentJob);
    let links = ["Stats", "Dashboard"];
    return (
      <div className="add-job-page">
        <NavBar links={links} />
        <div className="add-job-container">
          <JobForm onSubmit={values => this.onSubmit(values)} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(AddJobPage);
