
import GetSpeech from '../components/GetSpeech'
import Speaker from '../components/Speaker'

import React, { Component } from 'react';

class SpeechContainer extends Component {
  state={
    givenMessage: ''
  }

  handleMessage=(data)=>{
    this.setState({givenMessage: data})
  }


  render() {
    return (
      <div className="center-div">
      <GetSpeech givenMessage={this.state.givenMessage}/>
      <Speaker handleMessage={this.handleMessage}/>

      </div>
    );
  }
}


export default SpeechContainer;
