import React, { Component } from 'react';

class PartOfSpeechCard extends Component {

  split

  render() {
    console.log(this.props);
    return (
        <div>
          
          <h1 className="words-to-use">{this.props.item.sentences}</h1>
        </div>
    );
  }

}

export default PartOfSpeechCard;
