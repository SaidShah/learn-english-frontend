import React, { Component } from "react";
import regularTranslation from "../../images/regularTranslation.jpg";
import slowTranslation from "../../images/slowTranslation.jpg";
import { Redirect } from "react-router-dom";

class Pronounciation extends Component {
  state = {
    text: ""
  };

  componentDidMount() {
    let message = `Welcome to pronounciation, Type a word or sentence in the input box, and click the play
                    button, to listen to the correct pronounciation`;
    let msg = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(msg);
  }

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  slowTranslation = e => {
    e.preventDefault();
    let newMsg = this.state.text.split(" ").join(",");
    let msg = new SpeechSynthesisUtterance(newMsg);
    window.speechSynthesis.speak(msg);
  };

  fastTranslation = e => {
    e.preventDefault();
    let newMsg = this.state.text;
    let msg = new SpeechSynthesisUtterance(newMsg);
    window.speechSynthesis.speak(msg);
  };

  render() {
    let pronounciationContent = (
      <div className="container text-align-center large-margin">
        <form>
          <div className="form-group row">
            <label
              htmlFor="lgFormGroupInput"
              className="col-sm-2 col-form-label col-form-label-lg pronounciation-label-margin"
            >
              Enter text here:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control form-control-lg pronounciation-input-margin"
                id="lgFormGroupInput"
                placeholder="Text......"
                name="text"
                value={this.state.text}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </form>
        <img
          src={slowTranslation}
          className="guySpeaking"
          onClick={this.slowTranslation}
          alt=" "
        />
        <img
          src={regularTranslation}
          className="guySpeaking"
          onClick={this.fastTranslation}
          alt=" "
        />
      </div>
    );

    return (
      <>
        {localStorage.token ? (
          <> {pronounciationContent} </>
        ) : (
          <>
            <Redirect to="/" />
          </>
        )}
      </>
    );
  }
}

export default Pronounciation;
