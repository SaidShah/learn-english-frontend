import React, { Component } from 'react';
import jumbotron_one from '../../images/jumbotron_one.png'
import jumbotron_two from '../../images/jumbotron_books.jpg'
import jumbotron_three from '../../images/jumbotron_three.png'
import jumbotron_four from '../../images/jumbotron_four.png'

class Jumbotron extends Component {

  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <img src={jumbotron_one} alt=""/>
          <a className="jumbotron-button " href="/speech"> Try It Now</a>
        </div>
        <div className="container ">
        <h2 className="jumbotron-text h2tag">Your gateway to the world</h2>
          <img src={jumbotron_two} alt="" className='margin-bottom-jumbotron'/>
          <img src={jumbotron_three} alt="" className='margin-bottom-jumbotron'/>
          <img src={jumbotron_four} alt="" className='margin-bottom-jumbotron'/>
        </div>
      </div>
    );
  }

}

export default Jumbotron;
