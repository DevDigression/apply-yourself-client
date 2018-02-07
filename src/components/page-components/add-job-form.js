import React from "react";
import { Field, reduxForm, focus } from "redux-form";
import Input from "../input";
import { addJob } from "../../actions/users";
import { required, nonEmpty } from "../../validators";
import "./add-job-form.css";

export class AddJobForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(
            addJob(
                values.title,
                values.company,
                values.contact,
                values.deadline
            )
        );
    }

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
                className="add-job-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
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
                <label htmlFor="contact">Primary Contact</label>
                <Field
                    component={Input}
                    type="text"
                    name="contact"
                    id="contact"
                />
                <label htmlFor="deadline">Deadline</label>
                <Field
                    component={Input}
                    type="date"
                    name="deadline"
                    id="deadline"
                />
                <button disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: "add-job",
    onSubmitFail: (errors, dispatch) => dispatch(focus("add-job", "title"))
})(AddJobForm);
