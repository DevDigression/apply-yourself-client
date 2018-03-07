import React from "react";
import { Field, reduxForm, focus, reset } from "redux-form";
import Textarea from "../textarea";
import CheckpointDropdown from "../checkpoint-dropdown";
import { connect } from "react-redux";
import { required } from "../../validators";
import "./checkpoint-form.css";

export class CheckpointForm extends React.Component {
  render() {
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
        <h2>{this.props.title}</h2>
        <h4 className="error-message">{error}</h4>
        <label htmlFor="stage">Stage</label>
        <Field
          component={CheckpointDropdown}
          type="select"
          name="stage"
          id="stage"
          validate={[required]}
        />
        <label htmlFor="content">Additional Info</label>
        <Field component={Textarea} type="text" name="content" id="content" validate={[required]} />
        <button disabled={this.props.pristine || this.props.submitting}>
          Submit
        </button>
      </form>
    );
  }
}

export default (CheckpointForm = reduxForm({
  form: "checkpoint-form",
  enableReinitialize: true,
  onSubmitSuccess: (result, dispatch) => dispatch(reset("checkpoint-form")),
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus("checkpoint-form", "title"))
})(CheckpointForm));

CheckpointForm = connect(state => ({
  initialValues: state.protectedData.currentJob
}))(CheckpointForm);
