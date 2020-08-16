import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Navbar from 'Components/navbar';
import Experience from 'Components/experience';
import Projects from 'Components/projects';
import Profile from 'Components/profile';
import ContactMe from 'Components/contactMe';
import AboutMe from 'Components/aboutMe';
import Skills from 'Components/skills';
import './style.scss';


export class App extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="nav-section">
                    <Navbar />
                </div>
                <Profile />
                <div className="background-section">
                    <div className="section-heading">
                        <Typography align="center" variant="h4" gutterBottom>Hello! I'm Durgesh</Typography>
                    </div>
                    <AboutMe />
                </div>
                <div className="padding-section">
                    <div className="section-heading">
                        <Typography align="center" variant="h4" gutterBottom>Experience</Typography>
                    </div>
                    <Experience />
                </div>
                <div className="background-section">
                    <div className="section-heading">
                        <Typography align="center" variant="h4" gutterBottom>Projects</Typography>
                    </div>
                    <Projects />
                </div>
                {/* <Typography variant="h4" gutterBottom>Skills</Typography>
                <Skills /> */}
                <div className="contact-me">
                    <div className="section-heading">
                        <Typography align="center" variant="h4" gutterBottom>Contact Me</Typography>
                    </div>
                    <ContactMe />
                </div>
            </div>
        );
    }
}

export default App;
