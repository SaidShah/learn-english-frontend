export const signUp = (user) =>{
  return {
    type: "SIGN_UP",
    payload: user
  }
}

export const resetUserOnRefresh=(user)=>{
  return{
    type: "GET_USER",
    payload: user
  }
}
