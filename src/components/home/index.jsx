import React, { Component } from 'react';

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
      <div>
        <p>Home Works!</p>
        <p>{process.env.GOOGLE_URL}</p>
        {this.state.sample}
      </div>
    );
  }
}

export default Home;