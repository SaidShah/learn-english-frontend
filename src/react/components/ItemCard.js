import React, { Component } from 'react';
import {Icon} from 'watson-react-components/dist/components'
import {connect} from 'react-redux'
import {selectItem, unSelectItem} from '../../redux/action/categories'
import SpeechRecognition from 'react-speech-recognition'

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
    const {resetTranscript,startListening,transcript} = this.props
    resetTranscript()
    startListening()
  }

  unSelect=(e,item)=>{
    this.props.unSelectItem(item)
    const {stopListening,transcript} = this.props
    this.handleMessage(transcript);
    stopListening()
    console.log(e.target);
  }


  render() {
    console.log(this.props.item, this.props.isSelected);
    return (
      <div className="item-card">
        <h2>{this.props.item.name.toUpperCase()}</h2>
        <img src={this.props.item.image_url} alt=""/>
        <h2 className="textHere">Your guess: {!this.props.isSelected ? "": this.props.transcript }</h2>
        <h2 onChange={this.props.handleChange(this.props.transcript)}>{this.props.givenMessage}</h2>
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
  return{isSelected: state.selected.id === ownProps.item.id}
}

const mapDispatchToProps=(dispatch)=>{
  return {selectedItem: (e)=> dispatch(selectItem(e)), unSelectItem: (e)=>dispatch(unSelectItem(e))}
}

export default SpeechRecognition(options)(connect(mapStateToProps,mapDispatchToProps)(ItemCard))
