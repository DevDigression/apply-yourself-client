import React from "react";
import { Field, reduxForm, focus, reset } from "redux-form";
import Input from "../input";
import CheckpointDropdown from "../checkpoint-dropdown";
import { connect } from "react-redux";
import { required, nonEmpty } from "../../validators";
import "./checkpoint-form.css";

export class CheckpointForm extends React.Component {
  render() {
    console.log(this.props);
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }

    return (
      <form
        className="checkpoint-form"
        onSubmit={this.props.handleSubmit(values =>
          this.props.onSubmit(values)
        )}
      >
        {error}
        <h2>{this.props.title}</h2>
        <label htmlFor="content">Job ID</label>
        <Field
          component={Input}
          type="text"
          name="jobid"
          id="jobid"
        />
        <label htmlFor="stage">Stage</label>
        <Field component={CheckpointDropdown} type="select" name="stage" id="stage" />
        <label htmlFor="content">Additional Info</label>
        <Field
          component={Input}
          type="text"
          name="content"
          id="content"
        />
        <button disabled={this.props.pristine || this.props.submitting}>
          Submit
        </button>
      </form>
    );
  }
}


CheckpointForm = reduxForm({
  form: "checkpoint-form",
  enableReinitialize: true,
  onSubmitSuccess: (result, dispatch) => dispatch(reset("checkpoint-form")),
  onSubmitFail: (errors, dispatch) => dispatch(focus("checkpoint-form", "title"))
})(CheckpointForm);

CheckpointForm = connect(state => ({
  initialValues: state.protectedData.currentJob
}))(CheckpointForm);

export default CheckpointForm;