import React, { Component } from "react";
import { Icon } from "watson-react-components/dist/components";
import { connect } from "react-redux";
import {
  selectScrambled,
  unSelectScrambled
} from "../../redux/action/categories";
import SpeechRecognition from "react-speech-recognition";
import ReactLoading from "react-loading";

const propTypes = {};

const options = {
  autoStart: false
};

class UnscrambleCard extends Component {
  state = {
    text: "",
    response: "",
    prevQuestion: "",
    spokenRes: "",
    givenMessage: ""
  };

  selectedScrambled = (e, item) => {
    this.props.selectScrambled(item);
    const { resetTranscript, startListening } = this.props;
    resetTranscript();
    startListening();
  };

  unSelectScrambled = (e, item) => {
    this.props.unSelectScrambled(item);
    const { stopListening, transcript } = this.props;
    this.handleMessage(transcript);
    stopListening();
  };

  handleMessage = data => {
    this.setState({ givenMessage: data });
  };

  handleChange = message => {
    this.props.handleChange(message);
  };

  isCorrect = (item, message) => {
    let regex = /[?.,'!` \s]+/g;
    let userSaying = message
      .replace(regex, "")
      .trim()
      .toLowerCase();
    let solution = item.solution
      .replace(regex, "")
      .trim()
      .toLowerCase();
    if (userSaying.includes(solution)) {
      this.unSelectScrambled(item);
      item.isCorrect = true;
      this.isItCorrect(item);
    } else {
      return (
        <ReactLoading type={"bars"} color={"#2196f3"} height={40} width={40} />
      );
    }
  };

  isItCorrect = item => {
    return <Icon type="success" className="is-correct-checkmark" />;
  };

  render() {
    return (
      <div>
        <h1 className="words-to-use">{this.props.item.scrambled}</h1>

        <h2 className="textHere">
          Your guess: {!this.props.isSelected ? "" : this.props.transcript}
        </h2>

        <h2 onChange={this.handleChange(this.props.transcript)}>
          {this.props.givenMessage}
        </h2>

        {this.props.isSelected
          ? this.isCorrect(this.props.item, this.props.transcript)
          : ""}

        {this.props.item.isCorrect ? this.isItCorrect() : ""}

        {this.props.isSelected ? (
          <Icon
            type="stop"
            className="watson-mic"
            onClick={e => this.unSelectScrambled(e, this.props.item)}
          />
        ) : (
          <Icon
            type="microphone"
            className="watson-mic"
            onClick={e => this.selectedScrambled(e, this.props.item)}
          />
        )}
      </div>
    );
  }
}

UnscrambleCard.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => {
  return {
    isSelected: state.selectScrambled.id === ownProps.item.id,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectScrambled: e => dispatch(selectScrambled(e)),
    unSelectScrambled: e => dispatch(unSelectScrambled(e))
  };
};

export default SpeechRecognition(options)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UnscrambleCard)
);
