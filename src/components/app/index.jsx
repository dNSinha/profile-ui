import React, { Component } from 'react';
import Navbar from 'Components/navbar';
import Experience from 'Components/experience';
import Cards from 'Components/common/cards';
import Profile from 'Components/profile';
import ContactMe from 'Components/contactMe';
import Skills from 'Components/skills';
import './style.scss';


export class App extends React.Component {
    render() {
        return (
            <div className="main">
                <Navbar />
                <Profile />
                <Experience />
                <Cards />
                <Skills />
                <ContactMe />
            </div>
        );
    }
}

export default App;
