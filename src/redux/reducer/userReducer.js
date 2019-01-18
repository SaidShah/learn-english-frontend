const initialState = {
  user: {},
  items: {},
  selected: {},
  parts_of_speech: {},
  sentence: {},
  givenSentence: '',
  scrambledContent:{}
}

const userReducer = (state=initialState, action)=>{
  switch (action.type) {
    case 'GET_USER':
         return{...state,user:action.payload}
    case 'SIGN_UP':
         return{...state,user:action.payload}
    case 'LOGIN':
          return {...state, user: action.payload}
    case 'LOGOUT':
          return{...state, user: action.payload}
    case "EDIT_USER":
          return{...state, user:action.payload}
    case "INVALID_CREDENTIALS":
          return{...state,user:action.payload}
    case "GET_ITEMS":
          return{...state,items:action.payload}
    case "SELECT_ITEM":
          return {...state,selected: action.payload}
    case "UNSELECT_ITEM":
          return {...state, selected: action.payload}
    case "GET_SPEECH_PART":
          return{...state, parts_of_speech: action.payload}
    case "SELECT_SENTENCE":
          return{...state, sentence: action.payload}
    case "UNSELECT_SENTENCE":
          return{...state,sentence: action.payload}
    case "RETURN_SENTENCE":
          return {...state, givenSentence: action.payload}
    case 'RESET_SENTENCE':
          return{...state,givenSentence: action.payload}
    case "GET_SCRAMBLED":
          return{...state,scrambledContent: action.payload}
    default:
    return state;
  }


}

export default userReducer
