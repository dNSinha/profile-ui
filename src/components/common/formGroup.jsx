import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import update from 'immutability-helper';
import { run, ruleRunner } from 'Components/validation/rulerunner';
import { validators } from 'Components/validation/validators';
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { FormHelperText } from '@material-ui/core';
import { TextareaAutosize } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const fieldValidations = [
  ruleRunner('name', 'name', 'error', validators.isNullOrEmpty),
  ruleRunner('email', 'email', 'error', validators.isNullOrEmpty),
  ruleRunner('organisation', 'organisation', 'error', validators.isNullOrEmpty),
  ruleRunner('message', 'organisation', 'error', validators.isNullOrEmpty)
]

export class FormGroup extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isSubmitted: false,
      validationErrors: {},
    }
    this.textInput = React.createRef();
    this.handleTextChange = this.handleTextChange.bind(this);
    this.submit = this.submit.bind(this);
    this.getErrorMessage = this.getErrorMessage.bind(this);
  }

  componentDidMount() { }

  getErrorMessage(name) {
    let obj = this.state.validationErrors[name];
    return typeof obj !== 'undefined' ? obj : null;
  }

  handleTextChange(event) {
    let field = event.target.name;
    let value = event.target.value;
    console.log(event.target.name, event.target.value);

    let newState;
    newState = update(this.state, {
      [field]: { $set: value }
    });

    if (newState.isSubmitted) {
      newState.validationErrors = run(newState, fieldValidations);
    }

    this.setState(newState);
  }

  submit(event) {
    event.preventDefault();
    console.log(this.state)
    this.setState({
      isSubmitted: true,
      validationErrors: run(this.state, fieldValidations, true)
    }, () => {
      if (Object.keys(this.state.validationErrors).length === 0) {
        //call service
      }
    });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submit} className="col-md-6" noValidate autoComplete="off">
          <div>
            <TextField id="standard-name" tabIndex="1" margin="dense" name="name" label="NAME" value={this.state.name} onChange={this.handleTextChange} />
            {this.getErrorMessage('name') ? <FormHelperText error id="my-helper-text">{this.getErrorMessage('name').message}</FormHelperText> : null}
          </div>

          <div>
            <TextField id="standard-name" tabIndex="2" margin="dense" name="email" label="EMAIL" value={this.state.email} onChange={this.handleTextChange} />
            {this.getErrorMessage('email') ? <FormHelperText error id="my-helper-text">{this.getErrorMessage('email').message}</FormHelperText> : null}
          </div>

          <div>
            <TextField id="standard-name" tabIndex="3" margin="dense" name="organisation" label="ORGANISATION" value={this.state.organisation} onChange={this.handleTextChange} />
            {this.getErrorMessage('organisation') ? <FormHelperText error id="my-helper-text">{this.getErrorMessage('organisation').message}</FormHelperText> : null}
          </div>

          <div>
            <TextField id="standard-name" margin="dense" name="message" label="MESSAGE" value={this.state.message} multiline rows={4} rowsMax={6} onChange={this.handleTextChange} />
            {this.getErrorMessage('message') ? <FormHelperText error id="my-helper-text">{this.getErrorMessage('message').message}</FormHelperText> : null}
          </div>
          {/* helperText="Incorrect entry." */}
          {/* <FormControl margin="dense">
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText error id="my-helper-text">We'll never share your email.</FormHelperText>
          </FormControl> */}
          <div>
            <Button variant="contained" onClick={this.submit} color="primary" disableElevation>Submit</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default FormGroup;