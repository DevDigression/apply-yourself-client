import React from "react";
import { addNotes } from "../../actions/protected-data";
import "../pages/single-job.css";

export default class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: '',
      jobid: this.props.jobid
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let timer = null;
    clearTimeout(timer); 
    timer = setTimeout(this.handleSubmit, 1000)
    this.setState({notes: event.target.value});
  }

  handleSubmit(event) {
    // alert(this.state.notes);
    this.props.dispatch(addNotes(this.state));
  }

  render() {
    console.log(this.state.notes);
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