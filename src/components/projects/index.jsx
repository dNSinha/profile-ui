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
                content="IAM Content"
                company="Accenture"
                description=""
                role="Developer in scrum team"
                technology="React JS, NginX, Node JS, .net Web API, Mongo DB, Oracle DB"
                responsibility="To develop React solution from E2E"
                />
                <Cards
                title="User account management"
                content="User account content"
                company="Accenture"
                description=""
                role="Developer in scrum team"
                technology="React JS, NginX, Node JS, .net Web API, Mongo DB, Oracle DB"
                responsibility="To develop React solution from E2E"
                />
            </div>
        );
    }
}

export default Projects;