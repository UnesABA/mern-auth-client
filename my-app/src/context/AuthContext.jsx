import {createContext, useReducer} from "react"
import AuthReducer                 from "./AuthReducer"

const INITIAL_STATE = {
  user: {
    _id           : "67f93edd8c3c1f827d48c583",
    username      : "Hra",
    email         : "hra@gmail.com",
    profilePicture: "person/3.jpg",
    coverPicture  : "",
    isAdmin       : false, 
    followers     : [],
    followings    : []
  },
  isFetching: false,
  error     : false
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) =>{
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

  return (
    <AuthContext.Provider
      value= {{
        user      : state.user,
        isFetching: state.isFetching,
        error     : state.error,
        dispatch
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}