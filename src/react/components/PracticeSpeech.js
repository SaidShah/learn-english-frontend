import React, { Component } from "react";
import { Icon } from "watson-react-components/dist/components";
import { connect } from "react-redux";
import SpeechRecognition from "react-speech-recognition";
import ReactLoading from "react-loading";

const propTypes = {};

const options = {
  autoStart: false
};

class PracticeSpeech extends Component {
  state = {
    text: "",
    response: "",
    prevQuestion: "",
    spokenRes: "",
    givenMessage: "",
    userSpeaking: false
  };

  componentDidMount() {
    if (this.props.user.id) {
      let message = `Welcome ${
        this.props.user.first_name
      }, I am Zain your, english instructor. Lets have a conversation.
                  I will make believe, I don't ,know you, Say Hello, or Hi, or Hey, to begin our conversation.`;
      let msg = new SpeechSynthesisUtterance(message);
      window.speechSynthesis.speak(msg);
    } else {
      this.props.browserProps.history.push("/");
    }
  }

  handleMessage = data => {
    this.setState({ givenMessage: data }, () => this.userFinished());
  };

  userFinished = () => {
    this.handleWords(this.state.givenMessage);
  };

  handleTranscript = () => {
    this.setState({ userSpeaking: !this.state.userSpeaking });
    const { stopListening, transcript } = this.props;
    this.handleMessage(transcript);
    stopListening();
  };

  handleStart = () => {
    this.setState({ userSpeaking: !this.state.userSpeaking });
    const { resetTranscript, startListening } = this.props;
    resetTranscript();
    startListening();
  };

  handleWords = text => {
    if (
      text &&
      text.length > 0 &&
      text !== " " &&
      text !== "" &&
      text !== "   "
    ) {
      fetch("https://api.dialogflow.com/v1/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_DIALOGFLOW_KEY}`
        },
        body: JSON.stringify({
          query: text,
          lang: "en",
          sessionId: `${process.env.REACT_APP_DIALOGFLOW_SESSION_ID}`
        })
      })
        .then(res => res.json())
        .then(givenRes => {
          if (givenRes.result.metadata.isFallbackIntent === "true") {
            let newQuestion = `${givenRes.result.speech} ${
              this.state.prevQuestion
            }`;
            this.setState(
              { response: newQuestion, text: "", spokenRes: newQuestion },
              this.playVoice
            );
          } else if (givenRes.result.metadata.isFallbackIntent === "false") {
            this.setState(
              {
                response: givenRes.result.speech,
                text: "",
                prevQuestion: givenRes.result.speech,
                spokenRes: givenRes.result.speech
              },
              this.playVoice
            );
          }
        });
    }
  };

  showMic = () => {
    if (this.state.userSpeaking) {
      return (
        <Icon
          type="stop"
          className="watson-stop"
          onClick={this.handleTranscript}
        />
      );
    } else {
      return (
        <Icon
          type="microphone"
          className="watson-mic"
          onClick={this.handleStart}
        />
      );
    }
  };

  playVoice = () => {
    let msg = new SpeechSynthesisUtterance(this.state.spokenRes);
    window.speechSynthesis.speak(msg);
    this.setState({ spokenRes: "" });
  };

  render() {
    return (
      <div className="container i-said-box isaid-box-margin">
        <div className="col-xs-6 col-md-4">
          <h1 className="zain-i-said-text">What I Said</h1>
          {this.state.userSpeaking ? (
            <ReactLoading
              type={"bars"}
              color={"#2196f3"}
              height={60}
              width={60}
            />
          ) : (
            ""
          )}
          <h3>{this.props.transcript}</h3>
        </div>
        <div className="col-xs-6 col-md-4">{this.showMic()}</div>

        <div className="col-xs-6 col-md-4">
          <div>
            <h1 className="zain-i-said-text">What ZaiN Said</h1>
            <h1>
              {!this.state.userSpeaking ? (
                <ReactLoading
                  type={"bars"}
                  color={"#2196f3"}
                  height={60}
                  width={60}
                />
              ) : (
                ""
              )}
            </h1>
            <h3>{this.state.response} </h3>
          </div>
        </div>
      </div>
    );
  }
}

PracticeSpeech.propTypes = propTypes;

const mapStateToProps = state => {
  return { user: state.user };
};

export default SpeechRecognition(options)(
  connect(mapStateToProps)(PracticeSpeech)
);
