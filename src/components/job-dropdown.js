import React from "react";

export default class JobDropdown extends React.Component {
    render() {
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
                </select>
            </div>
        );
    }
}