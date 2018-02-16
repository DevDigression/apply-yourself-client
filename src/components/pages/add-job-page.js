import React from "react";
import { connect } from "react-redux";
import NavBar from "../navbar";
import JobForm from "../page-components/job-form";
import "./add-job-page.css";

export class AddJobPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(DISPATCH_AN_ACTION_THAT_CLEANS_CURRENT_JOB);
    // a clean currentJob would be:
    // {title:"", company:"" checkpoints:[] .... and so on..  }
    // NOT a null or empty object.
  }

  onSubmit(values) {
    values.keywords = values.keywords.split(",");
    this.props.dispatch(addJob(values));
    return; // TODO props.history .... to redirect
  }

  render() {
    let links = ["Stats", "Dashboard"];
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
