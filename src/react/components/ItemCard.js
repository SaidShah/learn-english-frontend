import React, { Component } from 'react';
import {Icon} from 'watson-react-components/dist/components'
import {connect} from 'react-redux'

class ItemCard extends Component {
  handleClick=(e,item)=>{
    console.log(item);
  }

  render() {
    return (
      <div className="item-card">
        <h2>{this.props.item.name.toUpperCase()}</h2>
        <img src={this.props.item.image_url} alt=""/>
        <input placeholder="Your Guess..." className="item-box-input" readOnly/>
        <Icon type="microphone" className="watson-mic" onClick={(e)=>this.handleClick(e,this.props.item)}/>
      </div>
    );
  }

}

const mapStateToProps=(state,ownProps)=>{
  console.log(ownProps, "OWN PROPS");
  return{}
}

export default connect(mapStateToProps)(ItemCard);
