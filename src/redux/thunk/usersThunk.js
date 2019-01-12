import {signUp, resetUserOnRefresh, loginUser, logoutUser, editUserProfile} from '../action/userActions'


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
     .catch(err => console.log(err))
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
      .catch(err => console.log(err))
  }
}

export const login =(user)=>{
  let userInfo = JSON.stringify({user:{username: user.username, password: user.password}})
  return function thunk(dispatch) {
    return fetch("http://localhost:3002/login",{method:"POST",
    headers: {
      "Content-Type":"application/json",
      Accepts: "application/json"
    },
    body: userInfo
    })
    .then(res => res.json())
    .then(user =>{
        localStorage.setItem("token",user.jwt)
        dispatch(loginUser(user.user))
    })
    .catch(err => alert("invalid username or password"))
  }
}

export const logout = (user)=>{
  let loggedOut = {}
  return function thunk(dispatch) {
    localStorage.removeItem("token")
    dispatch(logoutUser(loggedOut))
  }
}

export const editUser = (user) =>{
  let editedUser = JSON.stringify({user:{first_name: user.first_name, last_name: user.last_name, age: user.age, username: user.username, id: user.id}})
  return function thunk(dispatch){
    return fetch(`http://localhost:3002/users/${user.id}`,{method:"PATCH",
    headers: {
      "Content-Type":"application/json",
      Accepts: "application/json"},
    body: editedUser
  }).then(res=>res.json())
    .then(user => {
      dispatch(editUserProfile(user))
    })
    .catch(err => console.log(err))
  }
}
