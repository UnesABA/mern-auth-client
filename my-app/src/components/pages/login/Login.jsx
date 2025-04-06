import { useContext, useRef, useEffect} from "react"
import {loginCall}                      from "../../../apiCalls"
import { AuthContext }                  from "../../../context/AuthContext"
import CircularProgress                 from '@mui/material/CircularProgress'
import "./login.css"
import { useNavigate }                  from "react-router-dom"

const Login = () => {
  const email    = useRef()
  const password = useRef()
  const {user, isFetching, error, dispatch} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleClick = (event) =>{
    event.preventDefault()
    loginCall({email: email.current.value, password: password.current.value}, dispatch)
  }

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate])

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">YounesSocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on YounesSocial
          </span>
        </div>
        <div className= "loginRight">
          <form 
            className="loginBox" 
            onSubmit= {handleClick} 
            >

            <input placeholder="Email" type= "email" required className="loginInput" ref= {email}/>
            <input placeholder="Password" type= "password" required minLength= "6" className="loginInput" ref= {password} />
            
            <button className="loginButton" disabled= {isFetching}>
              {isFetching ? <CircularProgress color="inherit" size="25px"/> : "Login"}
            </button>
            <span className="loginForgot">
              Forgot your password ?
            </span>
            <button className="loginRegisterButton">
              {isFetching ? <CircularProgress color="inherit" size="25px"/> : "Create a New Account"}
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Login