import React from "react";
import { Field, reduxForm, focus, reset } from "redux-form";
import Input from "../input";
import Dropdown from "../dropdown";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { addJob, editJob } from "../../actions/protected-data";
import { fetchJobById } from "../../actions/protected-data";
import { required, nonEmpty } from "../../validators";
import "./job-form.css";

export class JobForm extends React.Component {
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
        className="add-job-form"
        onSubmit={this.props.handleSubmit(values =>
          this.props.onSubmit(values)
        )}
      >
        {error}
        <h2>Add Job</h2>
        <label htmlFor="title">Job Title</label>
        <Field
          component={Input}
          type="text"
          name="title"
          id="title"
          validate={[required, nonEmpty]}
        />
        <label htmlFor="company">Company</label>
        <Field
          component={Input}
          type="text"
          name="company"
          id="company"
          validate={[required, nonEmpty]}
        />
        <label htmlFor="posting">Posting</label>
        <Field component={Input} type="text" name="posting" id="posting" />
        <label htmlFor="contact">Primary Contact</label>
        <Field component={Input} type="text" name="contact" id="contact" />
        <label htmlFor="deadline">Deadline</label>
        <Field component={Input} type="date" name="deadline" id="deadline" />
        <label htmlFor="style">Style of Company</label>
        <Field component={Dropdown} type="select" name="style" id="style" />
        <label htmlFor="keywords">Tech Keywords</label>
        <Field component={Input} type="text" name="keywords" id="keywords" />
        <label htmlFor="image">Company Image</label>
        <Field component={Input} type="text" name="image" id="image" />
        <button disabled={this.props.pristine || this.props.submitting}>
          Submit
        </button>
      </form>
    );
  }
}

JobForm = reduxForm({
  form: "job-form",
  onSubmitSuccess: (result, dispatch) => dispatch(reset(JobForm)),
  onSubmitFail: (errors, dispatch) => dispatch(focus("job-form", "title"))
})(JobForm);

JobForm = connect(state => ({
  initialValues: state.protectedData.currentJob
}))(JobForm);

export default JobForm;
