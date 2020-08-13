import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from 'Components/App/routes';
import Loader from 'Components/loader';
import Header from 'Components/headers';
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
                {/* <Router>
                    <Suspense fallback={<Loader />}>
                        <Routes />
                    </Suspense>
                </Router> */}
            </div>
        );
    }
}

export default App;
