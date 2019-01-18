import React, { Component } from 'react';
import Sentence from '../components/Sentence'
import Level2Category from '../components/Level2Category'
import {Redirect, Link, Switch, withRouter, Route} from 'react-router-dom'
import nounImage from '../../images/noun.jpg'
import pronounImage from '../../images/pronoun.jpg'
import adjectiveImage from '../../images/adjective.jpg'
import verbImage from '../../images/verb.jpg'
import adverbImage from '../../images/adverb.jpg'
import prepositionImage from '../../images/prepositions.jpg'
import conjunctionImage from '../../images/conjunctions.jpg'
import interjectionImage from '../../images/interjection.jpg'


class Level2 extends Component {

  componentDidMount() {
    let message = `Welcome to level two, Please Select a Part of Speech`
    let msg = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(msg);
  }

  pronounDefinition(){
    return "Pronouns are words like I, it, which, who, that, his and herself. They are used in place of a noun or a noun phrase. To avoid repetition, we use a pronoun for the second and subsequent mentions of the same person or thing."
  }

  adjectiveDefinition(){
    return "Adjectives are words we use to describe the noun. Simple words like warm and fat are adjectives commonly used in writing.The simplest definition of an adjective is that it is a word that describes or clarifies a noun. Adjectives describe nouns by giving some information about an object's size, shape, age, color, origin or material."
  }

  verbDefinition(){
    return "Verbs are the action words in a sentence that describe what the subject is doing. Along with nouns, verbs are the main part of a sentence or phrase, telling a story about what is taking place. One clue to help you recognize a verb is its location compared to the subject. Verbs almost always come after a noun or pronoun."
  }

  adverbDefinition(){
    return "An adverb is a part of speech used to describe a verb, adjective, clause, or another adverb. It simply tells the readers how, where, when, or the degree at which something was done."
  }

  prepositionDefinition(){
    return "Prepositions show direction, location, time or introduce an object. They are usually followed by a noun, noun phrase, or pronoun The most common prepositions are little and very common"
  }

  conjunctionDefinition(){
    return "Conjunctions are words that join together other words or groups of words,\nThe conjunction is the part of speech used as a joiner for words, phrases, or clauses in a particular sentence."
  }

  interjectionDefinition(){
    return "An interjection is a word or phrase that is grammatically independent from the words around it, and mainly expresses feeling rather than meaning, We use interjections to express emotions such as pleasure, surprise, shock and disgust. Most interjections are just sounds, rather than actual words, and come at the beginning or at the end of what we say. Interjections are more common in speaking than in writing."
  }

  nounDefinition(){
    return "A noun is a part of speech used to name a person, animal, place, thing, or abstract concept. \nThe simplest definition of a noun is a thing and nouns are the basic building blocks of sentences. These things can represent a person, animal, place, idea, emotion – almost any thing that you can think of."
  }



  render() {
    let level2 =
        <>
          <div >
          <div className="text-align-center">
            <h1 className="special-blue-text">The 8 Parts Of Speech</h1>
            </div>
              <div className="flex-container">
                <div>
                <Link to="/level2/pronoun"><Sentence kind='pronoun' definition={this.pronounDefinition() } image_url={pronounImage}/></Link>
                </div>
                <div>
                <Link to="/level2/noun"><Sentence kind='noun'  definition={this.nounDefinition()} image_url={nounImage}/></Link>
                </div>
                <div >
                <Link to="/level2/adjectives"><Sentence kind='adjectives' definition={this.adjectiveDefinition()}  image_url={adjectiveImage}/></Link>
                </div>
                <div>
                <Link to="/level2/verb"><Sentence kind='verb' definition={this.verbDefinition()} image_url={verbImage} /></Link>
                </div>
              </div>
              <div className="text-align-center">
                </div>
                <div className="flex-container">
                  <div>
                  <Link to="/level2/adverb"><Sentence kind='adverb' definition={this.adverbDefinition()} image_url={adverbImage} /></Link>
                  </div>
                  <div>
                  <Link to="/level2/preposition"><Sentence kind='prepositions' definition={this.prepositionDefinition()} image_url={prepositionImage}/></Link>
                  </div>
                  <div >
                  <Link to="/level2/conjunction"><Sentence kind='conjunction' definition={this.conjunctionDefinition()} image_url={conjunctionImage} /></Link>
                  </div>
                  <div>
                  <Link to="/level2/interjection"><Sentence kind='interjection' definition={this.interjectionDefinition()}
                  image_url={interjectionImage}  /></Link>
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
            <Redirect to="/"/>
            </>
          }
          </>
          )
  }
}

export default withRouter(Level2);
