import React, { Component } from 'react';
import FormInput from 'Components/common/formInput';
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
                {/* <img className="image-container" src="./images/bg1.jpg"></img> */}
                {/* <div className="content"> */}
                    <FormInput />
                {/* </div> */}
            </div >
        );
    }
}

export default ContactMe;