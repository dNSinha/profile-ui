import React, { Component } from 'react';
import Navbar from 'Components/navbar';
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
      <div className='image-opacity container'>
        <img src="./images/bg1.jpg"></img>
        {/* <div className="top-left"><Navbar /></div> */}
        <div className="bottom-left">Bottom Left</div>
        <div className="top-left">Top Left</div>
        <div className="top-right">Top Right</div>
        <div className="bottom-right">Bottom Right</div>
        <div className="centered">Centered</div>
      </div>
    );
  }
}

export default Home;