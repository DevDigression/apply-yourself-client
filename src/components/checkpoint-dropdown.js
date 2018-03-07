import React from "react";

export default class CheckpointDropdown extends React.Component {
    render() {

        let error;
        if (this.props.meta.touched && this.props.meta.error) {
            error = <div className="form-error">{this.props.meta.error}</div>;
        }

        let warning;
        if (this.props.meta.touched && this.props.meta.warning) {
            warning = (
                <div className="form-warning">{this.props.meta.warning}</div>
            );
        }

        return (
            <div className="form-dropdown">
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <h4 className="error-message">{error}</h4>
                <h4 className="warning-message">{warning}</h4>
                <select
                    {...this.props.input}
                    name="style"
                    id={this.props.name}
                    type={this.props.type}
                >
                    <option value="" />
                    <option value="1">1. Resume / Cover Letter Sent</option>
                    <option value="2">2. Phone Screen</option>
                    <option value="3">3. First Interview (Culture Fit)</option>
                    <option value="4">4. Coding Challenge</option>
                    <option value="5">5. Technical Interview</option>
                    <option value="6">6. Onsite Interview</option>
                    <option value="7">7. Job Offer</option>
                </select>
            </div>
        );
    }
}
