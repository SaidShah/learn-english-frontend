import {
  getItemsFromCategory,
  getSpeechParts,
  getScrambledContent
} from "../action/categories";

export const getItems = category => {
  return function thunk(dispatch) {
    fetch(`http://localhost:3002/vocabularies`)
      .then(res => res.json())
      .then(items => {
        let selectedItems = items.words.filter(a => {
          return a.category === category;
        });
        let finalResults = selectedItems.map(eachItem => {
          return { ...eachItem, isCorrect: false };
        });
        dispatch(getItemsFromCategory(finalResults));
      });
  };
};

export const getPartsOfSpeech = category => {
  return function thunk(dispatch) {
    fetch(`http://localhost:3002/part_of_speeches`)
      .then(res => res.json())
      .then(eachItem => {
        let arr = eachItem.parts_of_speech.filter(e => {
          return e.category === category;
        });
        dispatch(getSpeechParts(arr));
      });
  };
};

export const getScrambled = content => {
  return function thunk(dispatch) {
    fetch(`http://localhost:3002/scrambles`)
      .then(res => res.json())
      .then(scrambled => {
        let arr = scrambled.filter(eachScramble => {
          return eachScramble.category === content;
        });
        dispatch(getScrambledContent(arr));
      });
  };
};
