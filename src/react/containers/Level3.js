import React, { Component } from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom'

class Level3 extends Component {

  render() {
    let level3 =
        <>
          <div >
          <div className="text-align-center">
            <h1 className="special-blue-text">The 8 Parts Of Speech</h1>
            </div>
              <div className="flex-container">
                <div>
                <Link to="/level3/pronoun">lsdjfklsdjf</Link>
                </div>
                <div>
                <Link to="/level3/noun">lsdkjflsd</Link>
                </div>
                <div >
                <Link to="/level3/adjectives">sdfnsldflkjsd</Link>
                </div>
                <div>
                <Link to="/level3/verb">ds,fmns,dnf</Link>
                </div>
              </div>
              <div className="text-align-center">
                </div>
                <div className="flex-container">
                  <div>
                  <Link to="/level3/adverb">dslfmlsdmflsmd</Link>
                  </div>
                  <div>
                  <Link to="/level3/preposition">lsdkjfljsdfl</Link>
                  </div>
                  <div >
                  <Link to="/level3/conjunction">dlsflsdf</Link>
                  </div>
                  <div>
                  <Link to="/level3/interjection">dskfnsndf</Link>
                  </div>
                </div>
              </div>
              </>

          return (
            <>
            {localStorage.token ?
              <>
            <Switch>
              <Route exact path="/level3/:type" render={props => <h2>sldjfljsdfljsl</h2>}/>
              <Route exact path="/level3" render={()=><div>{level3}</div>}/>
            </Switch>
            </>
            :
            <>
            <Redirect to="/"/>
            </>
          }
          </>
          )
  }
}

export default Level3;
