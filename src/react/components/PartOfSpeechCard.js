import React, { Component } from "react";
import { Icon } from "watson-react-components/dist/components";
import SpeechRecognition from "react-speech-recognition";
import ReactLoading from "react-loading";
import {
  selectSentence,
  unSelectSentence
} from "../../redux/action/categories";
import { connect } from "react-redux";

const propTypes = {};

const options = {
  autoStart: false
};

class PartOfSpeechCard extends Component {
  state = {
    text: "",
    response: "",
    prevQuestion: "",
    spokenRes: "",
    givenMessage: ""
  };

  selectedSentence = (e, item) => {
    this.props.selectSentence(item);
    const { resetTranscript, startListening } = this.props;
    resetTranscript();
    startListening();
  };

  unSelectSentence = (e, item) => {
    this.props.unSelectSentence(item);
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
    let solution = item.solutions
      .replace(regex, "")
      .trim()
      .toLowerCase();
    if (userSaying.includes(solution)) {
      this.unSelectSentence(item);
      item.isCorrect = true;
      this.isItCorrect(item);
    } else {
      if(userSaying.length >= solution.length){
        return <>
                   <Icon type="error" height={40} width={40} />
                   <ReactLoading type={"bars"} color={"#2196f3"} height={40} width={40} />
               </>
      }else{
        return  <ReactLoading type={"bars"} color={"#2196f3"} height={40} width={40} />
      }
    }
  };

  isItCorrect = item => {
    return <Icon type="success" className="is-correct-checkmark" />;
  };

  giveAnswer=(item)=>{
    this.props.unSelectSentence(item);
    let msg = new SpeechSynthesisUtterance(item.solutions);
    window.speechSynthesis.speak(msg);
  }


  render() {
    return (
      <div>
        <h1 className="words-to-use">{this.props.item.sentences}</h1>

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
        <Icon type="play" height="20" width="20" onClick={()=>this.giveAnswer(this.props.item)}/>
        {this.props.isSelected ? (
          <Icon
            type="stop"
            className="watson-mic"
            onClick={e => this.unSelectSentence(e, this.props.item)}
          />
        ) : (
          <Icon
            type="microphone"
            className="watson-mic"
            onClick={e => this.selectedSentence(e, this.props.item)}
          />
        )}
      </div>
    );
  }
}
PartOfSpeechCard.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => {
  return {
    isSelected: state.sentence.id === ownProps.item.id,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectSentence: e => dispatch(selectSentence(e)),
    unSelectSentence: e => dispatch(unSelectSentence(e))
  };
};

export default SpeechRecognition(options)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PartOfSpeechCard)
);
