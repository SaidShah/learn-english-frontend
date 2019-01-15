
import PracticeSpeech from '../components/PracticeSpeech'
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
    <div className="container">

        <PracticeSpeech browserProps={this.props.browserProps}/>

    </div>
    );
  }
}


export default SpeechContainer;
