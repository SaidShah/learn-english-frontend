import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import {getScrambled} from '../../redux/thunk/getCategories'

class Level3Category extends PureComponent {

componentDidMount() {
  this.props.getScrambled(this.props.type)
}

  render() {
    console.log(this.props);
    return (
      <div className="text-align-center">
        <div className="control-width">
        <h1><strong className="blue-text">Unscramble</strong></h1>

          <h3 className="blue-text">Fix each word or sentence by unscrambling it</h3>
          </div>
        <div className="parts-box">
          
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state)=>{
  return { scrambledContent: state.scrambledContent}
}

const mapDispatchToProps =(dispatch)=>{
  return {getScrambled: (e)=>dispatch(getScrambled(e))}
}

export default connect(mapStateToProps,mapDispatchToProps)(Level3Category);
