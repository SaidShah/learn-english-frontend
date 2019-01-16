import React, { Component } from 'react';

class Level2Category extends Component {

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.kind}</h1>
      </div>
    );
  }

}

export default Level2Category;
