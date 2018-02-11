import React from "react";
import { connect } from "react-redux";
import NavBar from "../navbar";
import AddJobForm from "../page-components/add-job-form";
import "./add-job-page.css";

export function AddJobPage(props) {
  // if (props.loggedIn) {
  //   return <Redirect to="/dashboard" />;
  // }

  let links = ["Stats", "Dashboard"];

  return (
    <div className="add-job-page">
      <NavBar links={links} />
      <AddJobForm />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(AddJobPage);
