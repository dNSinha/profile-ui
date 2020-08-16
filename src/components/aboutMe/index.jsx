import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import './style.scss';

export class AboutMe extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            sample: 'hi'
        }
    }

    componentDidMount() {
        this.setState({
            sample: 'newHi'
        })
    }

    render() {
        return (
            <div className="profile-abstraction">
                <Typography align="center" variant="body1" gutterBottom>
                I am a full stack web developer with robust problem-solving skills and proven experience
                 in creating and designing software in a test-driven environment following Agile principles. 
                </Typography>
            </div>
        );
    }
}

export default AboutMe;