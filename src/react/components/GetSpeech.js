import React, { Component } from "react";
import { Icon } from "watson-react-components/dist/components";
import { connect } from "react-redux";

class GetSpeech extends Component {
  state = {
    text: "",
    response: "",
    prevQuestion: "",
    spokenRes: ""
  };

  componentDidMount() {
    if (this.props.user.id) {
      let message = `Welcome ${
        this.props.user.first_name
      }, I am Zain your english instructor. Lets have a conversation.
                  Say Hello, or Hi, or Hey, to begin our conversation.`;
      let msg = new SpeechSynthesisUtterance(message);
      window.speechSynthesis.speak(msg);
    }
  }

  handleWords = (e, text) => {
    e.preventDefault();
    console.log(text, "TEXT");
    if (text.length > 0 && text !== " " && text !== "" && text !== "   ") {
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
          console.log(givenRes, "GIVEN RES");
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

  playVoice = () => {
    let msg = new SpeechSynthesisUtterance(this.state.spokenRes);
    window.speechSynthesis.speak(msg);
    this.setState({ spokenRes: "" });
  };

  render() {
    return (
      <div className="container i-said-box">
        <div class="col-xs-6 col-md-4">
          <Icon
            type="play"
            className="watson-play"
            onClick={e => this.handleWords(e, this.props.givenMessage)}
          />
          <h1>What I Said</h1>
          <textarea
            value={this.props.givenMessage}
            className="text-area"
            readOnly
          />
        </div>
        <div class="col-xs-6 col-md-4">
          <h2> middle column</h2>
        </div>

        <div class="col-xs-6 col-md-4">
          <h1>What ZaiN said</h1>
          <textarea
            value={this.props.response}
            className="text-area"
            readOnly
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(GetSpeech);
