import React, { Component } from "react";
import { Link, Route, Switch, withRouter, Redirect } from "react-router-dom";
import VocabularyCard from "../components/VocabularyCard";
import Level1Category from "../components/Level1Category";
import fruits from "../../images/fruit.jpg";
import vegetables from "../../images/vegetable2.jpg";
import clothes from "../../images/clothes.jpg";
import animals from "../../images/animals.jpg";
import random from "../../images/random.jpg";
import body from "../../images/body.jpg";
import numbers from "../../images/numbers.jpg";
import { connect } from "react-redux";

class Level1 extends Component {
  componentDidMount() {
    let message = `Welcome to level One, Please Select a CATEGORY`;
    let msg = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(msg);
  }

  render() {
    let level1 = (
      <>
        <div>
          <div className="text-align-center">
            <h1 className="special-blue-text">Practice Vocabulary</h1>
          </div>
          <div className="flex-container">
            <div>
              <Link to="/level1/fruit">
                <VocabularyCard type={"Fruits"} image={fruits} />
              </Link>
            </div>
            <div>
              <Link to="/level1/vegetable">
                <VocabularyCard type={"Vegetables"} image={vegetables} />
              </Link>
            </div>
            <div>
              <Link to="/level1/clothes">
                <VocabularyCard type={"Clothes"} image={clothes} />
              </Link>
            </div>
            <div>
              <Link to="/level1/animal">
                <VocabularyCard type={"Animals"} image={animals} />
              </Link>
            </div>
          </div>
          <div className="text-align-center">
            <h1 className="special-blue-text">Practice Alphabet & Numbers</h1>
          </div>
          <div className="flex-container">
            <div>
              <Link to="/level1/body">
                <VocabularyCard type={"Body Parts"} image={body} />
              </Link>
            </div>
            <div>
              <Link to="/level1/number">
                <VocabularyCard type={"Numbers"} image={numbers} />
              </Link>
            </div>
            <div>
              <Link to="/level1/random">
                <VocabularyCard type={"Random Words"} image={random} />
              </Link>
            </div>
          </div>
        </div>
      </>
    );

    return (
      <>
        {localStorage.token ? (
          <>
            <Switch>
              <Route
                exact
                path="/level1/:category"
                render={props => (
                  <Level1Category type={props.match.params.category} />
                )}
              />
              <Route exact path="/level1" render={() => <div>{level1}</div>} />
            </Switch>
          </>
        ) : (
          <>
            <Redirect to="" />
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(withRouter(Level1));
