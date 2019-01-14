import React, { Component } from 'react';
import {Link, Route, Switch,withRouter} from 'react-router-dom'
import VocabularyCard from '../components/VocabularyCard'
import Level1Category from '../components/Level1Category'
import fruits from "../../images/fruit.jpg"
import vegetables from "../../images/vegetable2.jpg"
import clothes from "../../images/clothes.jpg"
import animals from "../../images/animals.jpg"
import uppercase from "../../images/uppercase.jpg"
import lowercase from "../../images/lowercase.png"
import numbers from "../../images/numbers.jpg"

class Level1 extends Component {

  state={
        fruit:["apple","apricot","avocado","banana","bell pepper","blackberry","blood orange","blueberry","cantaloupe","cherry","chili pepper","clementine","coconut","cranberry","cucumber","currant","dragonfruit","eggplant","fig","grape","grapefruit","guava","honeydew","jackfruit","kiwi","kumquat","lemon","lime","lychee","mandarine","mango","mulberry","nectarine","olive","orange","papaya","peach","pear","persimmon","pineapple","plum","pomegranate","quince","raisin","rambutan","raspberry","redcurrant","star fruit","strawberry","tangerine","tomato","watermelon"],
        vegetable:["acorn squash","anise","artichoke","arugula","asparagus","banana squash","basil","beet","black bean","black-eyed pea","borlotti bean","broad beans","broccoflower","broccoli","cabbage","carrot","cauliflower","cayenne pepper","celery","chickpea","chives","cilantro","collard green","corn","cucumber","dill","eggplant","endive","fennel","garlic","ginger","green bean","green pepper","horseradish","jalapeno","kale","kidney bean","leek ","lettuce","mushroom","okra","onion","oregano","paprika","parsley","parsnip","pea","potato","pumpkin","radish","scallion","shallot","soy bean","spinach","squash ","sweet potato","tabasco pepper","thyme","turnip","wasabi","water chestnut","watercress","white radish","yam","zucchini"],
        clothes: ["ball gown","belt","blazer","blouse","boots","bow tie","cap","cardigan","coat","cufflinks","dress","dressing gown","dungarees","fleece","gloves","hat","hoody","jacket","jeans","jogging suit","pants","pashmina","polo shirt","poncho","raincoat","robe","sandals","scarf","shawl","shirt","shoes","shorts","skirt","slacks","slippers","socks","stockings","suit","sunglasses","sweater","sweatshirt","swimming costume","swimming shorts","swimming trunks","swimwear","tshirt","thong","tie","tights","tracksuit","trainers","trousers","underclothes","underpants","undershirt","underwear","vest"],
        animals:["alligator","alpaca","antelope","ape","armadillo","baboon","badger","bat","bear","beaver","bison","boar","buffalo","bull","camel","canary","cat","chameleon","cheetah","chimpanzee","chinchilla","chipmunk","cougar","cow","coyote","crocodile","crow","deer","dingo","dog","donkey","dromedary","elephant","elk","ferret","finch","fish","fox","frog","gazelle","giraffe","gnu","goat","gopher","gorilla","grizzly bear","ground hog","guinea pig","hamster","hedgehog","hippopotamus","hog","horse","hyena","iguana","impala","jackal","jaguar","kangaroo","koala","lamb","lemur","leopard","lion","lizard","llama","lynx","mink","mole","mongoose","monkey","moose","mountain goat","mouse","mule","opossum","orangutan","oryx","otter","ox","panda","panther","parakeet","parrot","pig","platypus" ,"porcupine","rabbit","raccoon","ram","rat","reindeer","reptile","rhinoceros","salamander","seal","sheep","shrew","skunk","sloth","snake","squirrel","tapir","tiger","toad","turtle","walrus","warthog","weasel","whale","wildcat","wolf","wolverine","wombat","woodchuck","yak","zebra"]
  }



  render() {

let level1=
  <>
      <div >
      <div className="text-align-center">
        <h1 className="special-blue-text">Practice Vocabulary</h1>
        </div>
          <div className="flex-container">
            <div>
            <Link to="/level1/fruit"><VocabularyCard type={"Fruits"} image={fruits}/></Link>
            </div>
            <div>
            <Link to="/level1/vegetables"><VocabularyCard type={"Vegetables"} image={vegetables}/></Link>
            </div>
            <div >
            <Link to="/level1/clothes"><VocabularyCard type={"Clothes"}  image={clothes}/></Link>
            </div>
            <div>
            <Link to="/level1/animals"><VocabularyCard type={"Animals"} image={animals}/></Link>
            </div>
          </div>
          <div className="text-align-center">
            <h1 className="special-blue-text">Practice Alphabet & Numbers</h1>
            </div>
            <div className="flex-container">
              <div>
              <Link to="/level1/uppercase"><VocabularyCard type={"Uppercase"} image={uppercase}/></Link>
              </div>
              <div>
              <Link to="/level1/lowercase"><VocabularyCard type={"Lowercase"} image={lowercase}/></Link>
              </div>
              <div >
              <Link to="/level1/numbers"><VocabularyCard type={"Numbers"} image={numbers} /></Link>
              </div>
            </div>
      </div>
  </>


    return (
      <>
      <Switch>
        <Route exact path="/level1/:category" render={props => <Level1Category props={props.match.params.category}/>}/>
        <Route exact path="/level1/" render={()=><div>{level1}</div>}/>
      </Switch>
      </>
    )
  }

}

export default withRouter(Level1)
