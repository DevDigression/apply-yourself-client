import React from "react";

export default class CheckpointDropdown extends React.Component {
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
                    <option value="1. Resume / Cover Letter Sent">1. Resume / Cover Letter Sent</option>
                    <option value="2. Phone Screen">2. Phone Screen</option>
                    <option value="3. First Interview (Culture Fit)">3. First Interview (Culture Fit)</option>
                    <option value="4. Coding Challenge">4. Coding Challenge</option>
                    <option value="5. Technical Interview">5. Technical Interview</option>
                    <option value="6. Onsite Interview">6. Onsite Interview</option>
                    <option value="7. Job Offer">7. Job Offer</option>
                </select>
            </div>
        );
    }
}