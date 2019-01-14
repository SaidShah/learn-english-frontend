import React, { Component } from 'react';


class VocabularyCard extends Component {

  render() {
    return (
      <div className="a">
      <h1>{this.props.type}</h1>
      <img src={this.props.image} className="image-padding" alt=""/>
      </div>
    );
  }

}

export default VocabularyCard;
