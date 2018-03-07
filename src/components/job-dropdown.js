import React from "react";

export default class JobDropdown extends React.Component {
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
                <label htmlFor={this.props.name}>
                    {this.props.label}
                </label>
                <select {...this.props.input} 
                    name="style"
                    id={this.props.name}
                    type={this.props.type}
                >
                    <option value=""></option>
                    <option value="startup">Startup</option>
                    <option value="enterprise">Enterprise</option>
                    <option value="nonprofit">Nonprofit</option>
                    <option value="contract">Contract</option>
                </select>
                <h4 className="error-message">{error}</h4>
                <h4 className="warning-message">{warning}</h4>
            </div>
        );
    }
}