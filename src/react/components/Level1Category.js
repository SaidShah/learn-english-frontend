import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import ItemCard from './ItemCard'
import {connect} from 'react-redux'
import {getItems} from '../../redux/thunk/getCategories'

class Level1Category extends Component {
  state={
    currentMessage: ''
  }

  handleChange=(data)=>{
    this.setState({currentMessage: data})
  }

  componentDidMount() {
    this.props.getItems(this.props.type)
  }

  getAllItems=()=>{
    let allItems = this.props.items.map(eachItem =>{
      return <div className="div-margin-bottom" key={eachItem.id}> <ItemCard handleChange={this.handleChange} item={eachItem} key={eachItem.id}/> </div>
    })
    return allItems
  }

  render() {

    return (
      <>
      {localStorage.token ?

      <div>
        <div className="text-align-center">
          <h1 className="special-blue-text">{this.props.type.toUpperCase()} Vocabulary</h1>
          </div>
            <div className="flex-container">
            {this.props.items.length > 0 ? this.getAllItems() : ""}
          </div>
      </div>
      :
      <Redirect to='/'/>
    }
    </>
    );
  }

}
const mapStateToProps =(state)=>{
  return {user: state.user, items: state.items}
}

const mapDispatchToProps=(dispatch)=>{
  return {
    getItems: (e)=>dispatch(getItems(e))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Level1Category);
