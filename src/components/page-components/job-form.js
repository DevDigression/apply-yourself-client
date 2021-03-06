import React from "react";
import { Field, reduxForm, focus, reset } from "redux-form";
import Input from "../input";
import JobDropdown from "../job-dropdown";
import PriorityDropdown from "../priority-dropdown";
import { connect } from "react-redux";
import { required, nonEmpty } from "../../validators";
import "./job-form.css";

export class JobForm extends React.Component {
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
        className="job-form"
        onSubmit={this.props.handleSubmit(values =>
          this.props.onSubmit(values)
        )}
      >
        {error}
        <h2>{this.props.title}</h2>
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
        <label htmlFor="posting">Job Posting URL</label>
        <Field component={Input} type="text" name="posting" id="posting" />
        <label htmlFor="contact">Primary Contact</label>
        <Field component={Input} type="text" name="contact" id="contact" />
        <label htmlFor="priority">Priority</label>
        <Field
          component={PriorityDropdown}
          type="select"
          name="priority"
          id="priority"
          validate={[required]}
        />
        <label htmlFor="style">Style of Company</label>
        <Field
          component={JobDropdown}
          type="select"
          name="style"
          id="style"
          validate={[required, nonEmpty]}
        />
        <label htmlFor="keywords">Desired Skills (separated by commas)</label>
        <Field
          component={Input}
          type="text"
          name="keywordsinput"
          id="keywordsinput"
          validate={[required, nonEmpty]}
        />
        <label htmlFor="image">Company Image URL</label>
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
  enableReinitialize: true,
  onSubmitSuccess: (result, dispatch) => dispatch(reset("job-form")),
  onSubmitFail: (errors, dispatch) => dispatch(focus("job-form", "title"))
})(JobForm);

JobForm = connect(state => {
  var ret = {
    initialValues: state.protectedData.currentJob
  };
  ret.initialValues.keywordsinput = ret.initialValues.keywords.join(",");
  return ret;
})(JobForm);

export default JobForm;
