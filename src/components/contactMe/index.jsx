import React, { Component } from 'react';
import FormGroup from 'Components/common/formGroup';
import ProfileDetails from 'Components/common/profileDetails';
import Lists from 'Components/common/lists';
import './style.scss';

export class ContactMe extends React.Component {

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
            <div className='contact-me-container'>
                <img className="contact-me-image-container" src="./images/contactMe.png"></img>
                <div className="contact-me-content">
                    <div className="contact-me-section">
                        <div className="form-group">
                            <FormGroup />
                        </div>
                        <div className="contact-me-details">
                            <ProfileDetails />
                        </div>
                    </div>
                </div>
                {/* <FormGroup />
                <Lists /> */}
                {/* </div> */}
            </div >
        );
    }
}

export default ContactMe;