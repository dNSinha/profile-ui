import React, { Component } from 'react';
import ProfileDetails from 'Components/common/profileDetails';
import './style.scss';

export class Profile extends React.Component {

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
        <img className="image-container" src="./images/corporate.png"></img>
        {/* <div className="bottom-left">Bottom Left</div> */}
        {/* <div className="top-left">Top Left</div> */}
        <div className="content">
          <h1>DURGESH NANDAN SINHA</h1>
          <p>Software developer</p>
          {/* <h2>I am a full stack web developer with robust problem-solving skills and proven experience in creating and designing software in a test-driven environment following Agile principles. </h2> */}
          <div className="profile-section">
            <div className="avatar">
              <img className="profile-image" src="./images/profile.jpg"></img>
            </div>
            <div className="details">
              <ProfileDetails />
            </div>
          </div>
        </div>
        {/* <div className="bottom-right">Bottom Right</div> */}
        {/* <div className="centered">Centered</div> */}
      </div >
    );
  }
}

export default Profile;