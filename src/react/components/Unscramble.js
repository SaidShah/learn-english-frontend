import React, { Component } from 'react';

class Unscramble extends Component {

  render() {
    return (
      <div>
      <h1><strong>{this.props.title.toUpperCase()}</strong></h1>
        <img src={this.props.image_url} className="image-padding" alt=""/>
      </div>
    );
  }

}

export default Unscramble;
