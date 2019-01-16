import React, { Component } from 'react';
import ItemCard from '../components/ItemCard'
import Sentence from '../components/Sentence'
import ListenSpell from '../components/ListenSpell'
import Unscramble from '../components/Unscramble'
import Level2Category from '../components/Level2Category'
import {Redirect, Link, Switch, withRouter, Route} from 'react-router-dom'

class Level2 extends Component {

  render() {
    let level2 =
        <>
          <div >
          <div className="text-align-center">
            <h1 className="special-blue-text">The 8 Parts Of Speech</h1>
            </div>
              <div className="flex-container">
                <div>
                <Link to="/level2/pronoun"><Sentence kind='pronoun' /></Link>
                </div>
                <div>
                <Link to="/level2/noun"><Sentence kind='noun'  /></Link>
                </div>
                <div >
                <Link to="/level2/adjective"><Sentence kind='adjective'  /></Link>
                </div>
                <div>
                <Link to="/level2/verb"><Sentence kind='verb'  /></Link>
                </div>
              </div>
              <div className="text-align-center">
                </div>
                <div className="flex-container">
                  <div>
                  <Link to="/level2/adverb"><Sentence kind='adverb' /></Link>
                  </div>
                  <div>
                  <Link to="/level2/preposition"><Sentence kind='preposition' /></Link>
                  </div>
                  <div >
                  <Link to="/level2/conjunction"><Sentence kind='conjunction' /></Link>
                  </div>
                  <div>
                  <Link to="/level2/interjection"><Sentence kind='interjection' /></Link>
                  </div>
                </div>
              </div>
              </>

          return (
            <>
            {localStorage.token ?
              <>
            <Switch>
              <Route exact path="/level2/:category" render={props => <Level2Category type={props.match.params.category}/>}/>
              <Route exact path="/level2" render={()=><div>{level2}</div>}/>
            </Switch>
            </>
            :
            <>
            <Redirect to=""/>
            </>
          }
          </>
          )
  }

}

export default withRouter(Level2);
