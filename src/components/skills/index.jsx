import React, { Component } from 'react';
import Tables from 'Components/common/tables';
import './style.scss';

export class Skills extends React.Component {

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
                <Tables />
                {/* <img className="image-container" src="./images/bg1.jpg"></img> */}
            </div >
        );
    }
}

export default Skills;