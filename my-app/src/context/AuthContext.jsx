import {createContext, useReducer} from "react"
import AuthReducer                 from "./AuthReducer"

const INITIAL_STATE = {
  user: {
    _id           : "67e2b5520868e6cc0059d255",
    username      : "Hra",
    email         : "hra@gmail.com",
    profilePicture: "assets/person/2.png",
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