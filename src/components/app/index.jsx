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
                <Navbar />
                <Profile />
                <Typography align="center" variant="h4" gutterBottom>Hello! I'm Durgesh</Typography>
                <AboutMe />
                <Typography align="center" variant="h4" gutterBottom>Experience</Typography>
                <Experience />
                <Typography align="center" variant="h4" gutterBottom>Projects</Typography>
                <Projects />
                {/* <Typography variant="h4" gutterBottom>Skills</Typography>
                <Skills /> */}
                <Typography align="center" variant="h4" gutterBottom>Contact Me</Typography>
                <ContactMe />
            </div>
        );
    }
}

export default App;
