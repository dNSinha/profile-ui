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
            <div className='container'>
                <img className="image-container" src="./images/contactMe.png"></img>
                <div className="content">
                    <div className="profile-section">
                        <div className="avatar form-group">
                            <FormGroup />
                        </div>
                        <div className="details">
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