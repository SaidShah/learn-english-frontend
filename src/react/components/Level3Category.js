import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import {getScrambled} from '../../redux/thunk/getCategories'
import UnscrambleCard from './UnscrambleCard'

class Level3Category extends PureComponent {

  state={
    currentMessage: ''
  }

  handleChange=(data)=>{
    this.setState({currentMessage: data})
  }

componentDidMount() {
  this.props.getScrambled(this.props.type)
    let message = `You have selected,${this.props.type}. Please, click on each micro-phone, and say the full sentence. Your instructor Zain, will check your answer as you speak. If you say the sentence incorrectly, or make a mistake, its ok, just
    click the stop button and restart. GOOD LUCK`
    let msg = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(msg);
}

showScrambled=()=>{
  let arr = this.props.scrambledContent.map(eachItem=>{
    return  <div className="div-margin-bottom div-margin-top" key={eachItem.id}><UnscrambleCard item={eachItem} key={eachItem.solution} handleChange={this.handleChange} currentMessage={this.state.currentMessage}/>
    </div>
  })
  return arr
}

  render() {
    return (
      <div className="text-align-center">
        <div className="control-width">
        <h1><strong className="blue-text">Unscramble</strong></h1>

          <h3 className="blue-text">Fix each word or sentence by unscrambling it</h3>
          </div>
        <div className="parts-box">
            {this.props.scrambledContent.length > 1 ? this.showScrambled() : ''}
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
