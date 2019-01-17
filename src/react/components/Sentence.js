import React, { Component } from 'react';




class Sentence extends Component {


  render() {
    return (
      <div className="a">
      <h1>{this.props.kind.toUpperCase()}</h1>
      <img src={this.props.image_url} className="image-padding" alt=""/>
      
      </div>
    );
  }

}

export default Sentence;
