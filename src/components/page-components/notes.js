import React from "react";
import { addNotes } from "../../actions/protected-data";
import "../pages/single-job.css";

export default class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: props.initialValue
    };

    this.handleChange = this.handleChange.bind(this);
    this.sendNotesToServer = this.sendNotesToServer.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({
      notes: props.initialValue
    });
  }

  componentWillUnmount(props) {
    this.props.dispatch(
      addNotes({
        notes: this.state.notes,
        jobid: this.props.jobid
      })
    );
  }

  handleChange(event) {
    let timer = null;
    clearTimeout(timer);
    timer = setTimeout(this.sendNotesToServer, 3000);
    this.setState({ notes: event.target.value });
  }

  sendNotesToServer(event) {
    // alert(this.state.notes);
    this.props.dispatch(
      addNotes({
        notes: this.state.notes,
        jobid: this.props.jobid
      })
    );
  }

  render() {
    return (
      <div className="notes-form">
        <form>
          <label>
            <textarea value={this.state.notes} onChange={this.handleChange} />
          </label>
        </form>
      </div>
    );
  }
}
