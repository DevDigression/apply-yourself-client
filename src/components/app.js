import React from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import Dashboard from "./pages/dashboard";
import Stats from "./pages/stats";
import RegistrationPage from "./pages/registration-page";
import LoginPage from "./pages/login-page";
import SingleJob from "./pages/single-job";
import AddJobPage from "./pages/add-job-page";
import AddCheckpointPage from "./pages/add-checkpoint-page";
import EditJobPage from "./pages/edit-job-page";
import { refreshAuthToken } from "../actions/auth";

export class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn && !this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (!nextProps.loggedIn && this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/stats" component={Stats} />
        <Route exact path="/register" component={RegistrationPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/job/:jobid" component={SingleJob} />
        <Route exact path="/job/edit/:jobid" component={EditJobPage} />
        <Route exact path="/add-job" component={AddJobPage} />
        <Route exact path="/checkpoint/:jobid" component={AddCheckpointPage} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
