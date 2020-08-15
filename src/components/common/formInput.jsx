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
    ruleRunner('organisation', 'organisation', 'error', validators.isNullOrEmpty)
]

export class FormInput extends React.Component {

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
          <TextField id="standard-name" tabIndex="1" margin="dense" name="name" label="NAME" value={this.state.name} fullWidth onChange={this.handleTextChange} />
          {this.getErrorMessage('name') ? <FormHelperText error id="my-helper-text">{this.getErrorMessage('name').message}</FormHelperText> : null}
          <TextField id="standard-name" tabIndex="2" margin="dense" name="email" label="EMAIL" value={this.state.email} helperText={this.getErrorMessage('email') && this.getErrorMessage('email').message} fullWidth onChange={this.handleTextChange} />
          <TextField id="standard-name" tabIndex="3" margin="dense" name="organisation" label="ORGANISATION" value={this.state.organisation} helperText={this.getErrorMessage('organisation') && this.getErrorMessage('organisation').message} fullWidth onChange={this.handleTextChange} />
          <TextField id="standard-name" margin="dense" name="message" label="MESSAGE" value={this.state.message} fullWidth multiline rows={4} rowsMax={6} onChange={this.handleTextChange} />
          {/* helperText="Incorrect entry." */}
          {/* <FormControl margin="dense">
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText error id="my-helper-text">We'll never share your email.</FormHelperText>
          </FormControl> */}
          <Button variant="contained" onClick={this.submit} color="primary" disableElevation>Submit</Button>
          {/* <FormInput type="text" name="studentName" label="name" onChange={this.handleTextChange} errors={this.getErrorMessage('studentName')} ref={this.textInput}></FormInput>
          <FormInput type="text" name="fatherName" label="father name" onChange={this.handleTextChange} errors={this.getErrorMessage('fatherName')}></FormInput>
          <FormInput type="text" name="motherName" label="mother name" onChange={this.handleTextChange} errors={this.getErrorMessage('motherName')}></FormInput>
          <FormInput type="text" name="studentClass" label="class" onChange={this.handleTextChange}></FormInput>
          <FormInput type="number" name="studentRollNumber" label="Roll Number" onChange={this.handleTextChange}></FormInput>
          <FormInput type="text" name="schoolName" label="School" onChange={this.handleTextChange}></FormInput>
          <FormInput type="text" name="StudentCode" label="Admission number" onChange={this.handleTextChange}></FormInput>
          <Button type="submit" text="SAVE" tabIndex="4"></Button> */}
        </form>
      </div>
    );
  }
}

export default FormInput;