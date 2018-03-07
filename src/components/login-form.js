import React from "react";
import { Field, reduxForm, focus } from "redux-form";
import Input from "./input";
import { Link } from "react-router-dom";
import { login } from "../actions/auth";
import { required, nonEmpty } from "../validators";
import "./login.css";

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        const demoUser = {
            username: "demouser",
            password: "demo123456"
        };

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
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}
            >
                <h2>Login</h2>
                <h4 className="error-message">{error}</h4>
                <label htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    validate={[required, nonEmpty]}
                />
                <button className="submit-btn" disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
                <div className="register-section">
                Don't have an account? <p><Link to="/register">Register a new one!</Link></p>
                </div>
                <div className="demo-section">
                <p>Or try a demo by clicking below!<button className="demo-btn" onClick={() => this.onSubmit(demoUser)}>Demo</button></p>
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: "login",
    onSubmitFail: (errors, dispatch) => dispatch(focus("login", "username"))
})(LoginForm);
