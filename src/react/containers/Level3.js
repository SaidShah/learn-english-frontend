import React, { Component } from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom'
import Unscramble from '../components/Unscramble'
import Level3Category from '../components/Level3Category'
import easy from '../../images/easy.jpg'
import medium from '../../images/medium.jpg'
import hard from '../../images/hard.jpg'
import easyWords from '../../images/easyWords.jpg'
import mediumWords from '../../images/mediumWords.jpg'
import hardWords from '../../images/hardWords.jpg'


class Level3 extends Component {

  render() {
    let level3 =
        <>
          <div >
           <div className="text-align-center">
            <h1 className="special-blue-text">Unscramble Words</h1>
            </div>
              <div className="flex-container">
                <div>
                <Link to="/level3/easy"><Unscramble image_url={easyWords} type={"easyWords"} title={"easy Words"}/></Link>
                </div>
                <div>
                <Link to="/level3/medium"><Unscramble image_url={mediumWords} type={"mediumWords"} title={"medium Words"}/></Link>
                </div>
                <div >
                <Link to="/level3/hard"><Unscramble  image_url={hardWords} type={"hardWords"} title={"hard Words"}/></Link>
                </div>
              </div>
              <div className="text-align-center">
               <h1 className="special-blue-text">Unscramble Sentences</h1>
               </div>
                 <div className="flex-container">
                   <div>
                   <Link to="/level3/easy"><Unscramble image_url={easy} type={"easy"} title={"easy sentences"}/></Link>
                   </div>
                   <div>
                   <Link to="/level3/medium"><Unscramble image_url={medium} type={"medium"} title={"medium sentences"}/></Link>
                   </div>
                   <div >
                   <Link to="/level3/hard"><Unscramble  image_url={hard} type={"hard"} title={"hard sentences"}/></Link>
                   </div>
                 </div>
            </div>
          </>

          return (
            <>
            {localStorage.token ?
              <>
            <Switch>
              <Route exact path="/level3/:type" render={props => <Level3Category />}/>
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