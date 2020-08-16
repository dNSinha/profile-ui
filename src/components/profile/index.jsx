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
        <div className="content">
          <h1>DURGESH NANDAN SINHA</h1>
          <p>Software developer</p>
          <div className="profile-section">
            <div className="avatar">
              <img className="profile-image" src="./images/profile.jpg"></img>
            </div>
            <div className="details">
              <ProfileDetails />
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default Profile;