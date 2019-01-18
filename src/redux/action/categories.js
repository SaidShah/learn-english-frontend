export const getItemsFromCategory = type => {
  return {
    type: "GET_ITEMS",
    payload: type
  };
};

export const selectItem = item => {
  return {
    type: "SELECT_ITEM",
    payload: item
  };
};

export const unSelectItem = item => {
  return {
    type: "UNSELECT_ITEM",
    payload: {}
  };
};

export const getSpeechParts = item => {
  return {
    type: "GET_SPEECH_PART",
    payload: item
  };
};

export const selectSentence = item => {
  return {
    type: "SELECT_SENTENCE",
    payload: item
  };
};

export const unSelectSentence = item => {
  return {
    type: "UNSELECT_SENTENCE",
    payload: {}
  };
};

export const handleSentence = sentence => {
  console.log(sentence, "HANDLE SENTENCE IN CATEGOREIS");
  return {
    type: "RETURN_SENTENCE",
    payload: sentence
  };
};

export const resetSentence = sentence => {
  console.log(sentence, "reset SENTENCE IN CATEGOREIS");
  return {
    type: "RESET_SENTENCE",
    payload: ""
  };
};

export const getScrambledContent = content => {
  return {
    type: "GET_SCRAMBLED",
    payload: content
  };
};

export const selectScrambled = content => {
  return {
    type: "SELECT_SCRAMBLED",
    payload: content
  };
};

export const unSelectScrambled = content => {
  return {
    type: "UNSELECT_SCRAMBLED",
    payload: {}
  };
};
