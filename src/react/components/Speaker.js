import React, { PropTypes, Component } from 'react'
import SpeechRecognition from 'react-speech-recognition'
import {Icon} from 'watson-react-components/dist/components'

const propTypes = {
  //Props injected by SpeechRecognition
  // transcript: PropTypes.string,
  // resetTranscript: PropTypes.func,
  // browserSupportsSpeechRecognition: PropTypes.bool
}

const options ={
  autoStart: false
}

class Speaker extends Component {



  handleTranscript=()=>{
    const {stopListening,transcript} = this.props
    this.props.handleMessage(transcript);
    //resetTranscript()
    stopListening()
  }

  handleStart=()=>{
    const {resetTranscript,startListening} = this.props
    resetTranscript()
    startListening()
  }

  render() {

    return (
      <div>
      <Icon type="microphone" className="watson-mic" onClick={this.handleStart}/>
      <Icon type="stop" className="watson-mic" onClick={this.handleTranscript}/>
        <h2>{this.props.transcript}</h2>
      </div>
    )
  }
}

Speaker.propTypes = propTypes

export default SpeechRecognition(options)(Speaker)
