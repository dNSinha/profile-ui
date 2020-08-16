import React, { Component } from 'react';
import Cards from 'Components/common/cards';
import './style.scss';

export class Projects extends React.Component {

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
            <div className="projects-cards">
                <Cards
                title="Identity & access management"
                />
                <Cards
                title="User account management"
                />
            </div>
        );
    }
}

export default Projects;