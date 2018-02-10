import React from "react";
import { Field, reduxForm, focus, initialize } from "redux-form";
import Input from "../input";
import NavBar from "../navbar";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { editJob } from "../../actions/protected-data";
import { fetchJobById } from "../../actions/protected-data";
import { required, nonEmpty } from "../../validators";
import "./edit-job-form.css";

export class EditJobForm extends React.Component {
    state = {
        redirect: false
    };

    componentDidMount() {
        this.props.dispatch(fetchJobById(this.props.match.params.jobid));
        // this.props.initialize(EditJobForm, this.props.initialValues);
    }

    onSubmit(updatedValues) {
        return this.props
            .dispatch(editJob(updatedValues))
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

        let links = ["Dashboard"];

        console.log(this.props);
        return (
            <div className="edit-job">
                <NavBar links={links} />
                <form
                    values={this.props.initialValues}
                    className="edit-job-form"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}
                >
                    {error}
                    <h2>Edit Job</h2>
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
                    <Field
                        component={Input}
                        type="text"
                        name="style"
                        id="style"
                    />
                    <label htmlFor="keywords">Tech Keywords</label>
                    <Field
                        component={Input}
                        type="text"
                        name="keywords"
                        id="keywords"
                    />
                    {/* <label htmlFor="notes">Notes</label>
                <Field
                    component={Input}
                    type="text"
                    name="notes"
                    id="notes"
                />*/}
                    <button
                        disabled={this.props.pristine || this.props.submitting}
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

EditJobForm = reduxForm({
    form: "edit-job",
    onSubmitFail: (errors, dispatch) => dispatch(focus("edit-job", "title"))
})(EditJobForm);

EditJobForm = connect(state => ({
    initialValues: state.protectedData.currentJob
}))(EditJobForm);

export default EditJobForm;
