import {signUp, resetUserOnRefresh} from '../action/userActions'


export const createUser = (user) =>{
  let newUser = JSON.stringify({user:{first_name: user.first_name, last_name: user.last_name, age: user.age, username: user.username, password: user.password}})
  return function thunk (dispatch) {
    return fetch("http://localhost:3002/users",{method: "POST",
      headers:{
        "Content-Type":"application/json",
        Accepts: "application/json"
      },
      body: newUser
   }).then(res => res.json())
     .then(user =>{
        localStorage.setItem("token", user.jwt)
        dispatch(signUp(user.user))
     })
  }
}

export const resetUser = (token) =>{
  return function thunk (dispatch){
    return fetch("http://localhost:3002/current_user",{method: "GET",
      headers:{"Content-Type":"application/json",
            Action:"application/json",
            Authorization: `${token}`}
    }).then(res => res.json())
      .then(user =>{
        localStorage.setItem("token", user.jwt)
        dispatch(resetUserOnRefresh(user.user))
      })
  }
}
