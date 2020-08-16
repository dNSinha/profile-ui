import React, { Component } from 'react';
import './style.scss';

class FormInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-group">
                <TextField id="standard-name" tabIndex={this.props.tabIndex} margin="dense" name={this.props.tabIndex} label={this.props.label} value={this.state.name} fullWidth onChange={this.handleTextChange} />
                {this.getErrorMessage('name') ? <FormHelperText error id="my-helper-text">{this.getErrorMessage('name').message}</FormHelperText> : null}
            </div>
        )
    }
}

export default FormInput;