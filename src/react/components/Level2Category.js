import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getPartsOfSpeech} from '../../redux/thunk/getCategories'

class Level2Category extends Component {

  componentDidMount() {
    this.props.getPartsOfSpeech(this.props.type)
  }




  render() {
    console.log(this.props);
    return (
      <div className="item-card text-align-center">
        <h1>{this.props.type.toUpperCase()}</h1>
      </div>
    );
  }

}

const mapDispatchToProps=(dispatch)=>{
  return {getPartsOfSpeech : (e)=>dispatch(getPartsOfSpeech(e))}
}

export default connect(null,mapDispatchToProps)(Level2Category);
