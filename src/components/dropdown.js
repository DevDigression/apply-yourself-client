import React from "react";

export default class Dropdown extends React.Component {
    // componentDidUpdate(prevProps) {
    //     if (!prevProps.meta.active && this.props.meta.active) {
    //         this.input.focus();
    //     }
    // }

    render() {
        // let error;
        // if (this.props.meta.touched && this.props.meta.error) {
        //     error = <div className="form-error">{this.props.meta.error}</div>;
        // }

        // let warning;
        // if (this.props.meta.touched && this.props.meta.warning) {
        //     warning = (
        //         <div className="form-warning">{this.props.meta.warning}</div>
        //     );
        // }

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