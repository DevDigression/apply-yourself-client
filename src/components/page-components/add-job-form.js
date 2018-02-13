import React from "react";
import { Field, reduxForm, focus } from "redux-form";
import Input from "../input";
import { Redirect } from "react-router-dom";
import { addJob } from "../../actions/protected-data";
import { required, nonEmpty } from "../../validators";
import "./add-job-form.css";

export class AddJobForm extends React.Component {
    state = {
        redirect: false
    };

    onSubmit(values) {
        return this.props
            .dispatch(addJob(values))
            .then(() => this.setState({ redirect: true }));
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/dashboard" />;
        }

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
                <label htmlFor="">Posting</label>
                <Field
                    component={Input}
                    type="text"
                    name="posting"
                    id="posting"
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
                <label htmlFor="style">Style of Company</label>
                <Field component={Input} type="text" name="style" id="style" />
                <label htmlFor="keywords">Tech Keywords</label>
                <Field
                    component={Input}
                    type="text"
                    name="keywords"
                    id="keywords"
                />
                <label htmlFor="image">Company Image</label>
                <Field
                    component={Input}
                    type="text"
                    name="image"
                    id="image"
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
