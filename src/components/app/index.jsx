import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from 'Components/App/routes';
import Loader from 'Components/loader';
import Header from 'Components/headers';
import CenteredTabs from 'Components/navbar';


export class App extends React.Component {
    render() {
        return (
            <div>
                <CenteredTabs />
                {/* <Header /> to customise later */}
                <Router>
                    <Suspense fallback={<Loader />}>
                        <Routes />
                    </Suspense>
                </Router>
            </div>
        );
    }
}

export default App;
