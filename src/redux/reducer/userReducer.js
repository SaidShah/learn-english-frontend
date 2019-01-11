const initialState = {
  user: {}
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
    default:
    return state;
  }


}

export default userReducer
