import React, { Component } from 'react';
import {Icon} from 'watson-react-components/dist/components'
import {connect} from 'react-redux'
import {selectItem, unSelectItem} from '../../redux/action/categories'
import SpeechRecognition from 'react-speech-recognition'
import ReactLoading from 'react-loading'

const propTypes = {

}

const options ={
  autoStart: false
}



class ItemCard extends Component {



  state={
    text: '',
    response: '',
    prevQuestion: '',
    spokenRes: '',
    givenMessage: ''
  }

  handleMessage=(data)=>{
    this.setState({givenMessage: data})
  }

  selectItem=(e,item)=>{
    this.props.selectedItem(item)
    const {resetTranscript,startListening} = this.props
    resetTranscript()
    startListening()
  }

  unSelect=(e,item)=>{
    this.props.unSelectItem(item)
    const {stopListening,transcript} = this.props
    this.handleMessage(transcript);
    stopListening()
  }

  handleChange=(message)=>{
    this.props.handleChange(message)
  }

  isCorrect=(item,message)=>{
    if(message.includes(item.name)){
      this.unSelect(item)
      item.isCorrect=true
      this.isItCorrect(item)
    }else{

      return <ReactLoading type={"bars"} color={"#2196f3"} height={40} width={40}/>
    }

  }

  isItCorrect=(item)=>{
    return <Icon type="success" className="is-correct-checkmark"/>
  }


  render() {
    return (
      <div className="item-card">
        <h2>{this.props.item.name.toUpperCase()}</h2>
        <img src={this.props.item.image_url} alt=""/>
        <h2 className="textHere">Your guess: {!this.props.isSelected ? "": this.props.transcript.split(" ")[this.props.transcript.split(" ").length-1]}</h2>
        <h2 onChange={this.handleChange(this.props.transcript)}>{this.props.givenMessage}</h2>
        {this.props.isSelected ? this.isCorrect(this.props.item,this.props.transcript) : ''}
        {this.props.item.isCorrect ? this.isItCorrect() : ''}
        {this.props.isSelected ?
          <Icon type="stop" className="watson-mic" onClick={(e)=>this.unSelect(e,this.props.item)}/>
           :
           <Icon type="microphone" className="watson-mic" onClick={(e)=>this.selectItem(e,this.props.item)}/>
         }
      </div>
    );
  }

}

ItemCard.propTypes = propTypes

const mapStateToProps=(state,ownProps)=>{
  return{isSelected: state.selected.id === ownProps.item.id, user: state.user}
}

const mapDispatchToProps=(dispatch)=>{
  return {selectedItem: (e)=> dispatch(selectItem(e)), unSelectItem: (e)=>dispatch(unSelectItem(e))}
}

export default SpeechRecognition(options)(connect(mapStateToProps,mapDispatchToProps)(ItemCard))
