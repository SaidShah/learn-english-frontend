import React, { Component } from 'react';

class Sentence extends Component {

  render() {
    console.log(this.props,"LSDJFLJDSLFJSDLFJLDSJLDSJ");
    return (
      <div>
      <h1>{this.props.kind.toUpperCase()}</h1>
      </div>
    );
  }

}

export default Sentence;
