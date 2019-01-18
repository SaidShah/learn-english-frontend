import React, { Component } from "react";
import { connect } from "react-redux";
import PartOfSpeechCard from "./PartOfSpeechCard";
import { getPartsOfSpeech } from "../../redux/thunk/getCategories";

class Level2Category extends Component {
  state = {
    currentMessage: ""
  };

  handleChange = data => {
    this.setState({ currentMessage: data });
  };

  componentDidMount() {
    this.props.getPartsOfSpeech(this.props.type);
    let message = `You have selected,${
      this.props.type
    }. Please, click on each micro-phone, and say the full sentence. Your instructor Zain, will check your answer as you speak. If you say the sentence incorrectly, or make a mistake, its ok, just
    click the stop button and restart. GOOD LUCK`;
    let msg = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(msg);
  }

  getCards = () => {
    let arr = this.props.parts_of_speech.map(eachItem => {
      return (
        <div className="div-margin-bottom div-margin-top" key={eachItem.id}>
          <PartOfSpeechCard
            item={eachItem}
            key={eachItem.solution}
            handleChange={this.handleChange}
            currentMessage={this.state.currentMessage}
          />
        </div>
      );
    });
    return arr;
  };

  render() {
    return (
      <div className="text-align-center">
        <h1>{this.props.type.toUpperCase()}</h1>
        <div className="control-width">
          <h2 className="h2-text">
            <strong className="blue-text">Definition:</strong>
            <span>
              {" "}
              {this.props.parts_of_speech.length > 1
                ? this.props.parts_of_speech[0].definition
                : ""}
            </span>
          </h2>

          <h2 className="h2-text">
            <strong className="blue-text">
              {this.props.type.toUpperCase()} Examples:
            </strong>
            <span>
              {" "}
              {this.props.parts_of_speech.length > 1
                ? this.props.parts_of_speech[0].examples
                : ""}
            </span>
          </h2>

          <h1>
            <strong className="blue-text">Word Bank:</strong>
            <span>
              {" "}
              {this.props.parts_of_speech.length > 1
                ? this.props.parts_of_speech[0].words_to_use
                    .split(",")
                    .join(" | ")
                : ""}
            </span>
          </h1>
          <h3 className="blue-text">
            Complete the sentence using one of the words in the word bank
          </h3>
        </div>
        <div className="parts-box">
          {this.props.parts_of_speech.length > 1 ? this.getCards() : ""}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { getPartsOfSpeech: e => dispatch(getPartsOfSpeech(e)) };
};

const mapStateToProps = state => {
  return { parts_of_speech: state.parts_of_speech };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Level2Category);
