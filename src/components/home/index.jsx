import React, { Component } from 'react';
import './style.scss';

export class Home extends React.Component {

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
        <img className="image-container" src="./images/header.jpg"></img>
        {/* <div className="bottom-left">Bottom Left</div> */}
        {/* <div className="top-left">Top Left</div> */}
        <div className="content">
          <h1>DURGESH NANDAN SINHA</h1>
          <p>Web developer</p>
          <h2>I am a full stack web developer with robust problem-solving skills and proven experience in creating and designing software in a test-driven environment following Agile principles. </h2>
          <p className="details">Lorem ipsum..</p>
        </div >
        {/* <div className="bottom-right">Bottom Right</div> */}
        {/* <div className="centered">Centered</div> */}
      </div >
    );
  }
}

export default Home;