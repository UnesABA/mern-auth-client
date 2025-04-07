import { useRef }    from "react"
import axios         from "axios"
import {useNavigate} from "react-router-dom"
import "./register.css"

const Register = () => {
  const username        = useRef()
  const email           = useRef()
  const password        = useRef()
  const confirmPassword = useRef()
  const navigate        = useNavigate()

  const handleClick = async (event) =>{
      event.preventDefault()

      if(confirmPassword.current.value !== password.current.value){
        password.current.setCustomValidity("Passwords don't match !!")
        return
      }
      const user = {
        username: username.current.value, 
        email   : email.current.value, 
        password: password.current.value,
      }
      try {
        await axios.post("http://localhost:5000/api/auth/register", user)
        navigate("/login")
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <div className= "register">
      <div className= "registerWrapper">
        <div className= "registerLeft">
          <h3 className= "registerLogo">YounesSocial</h3>
          <span className= "registerDesc">
            Connect with friends and the world around you on YounesSocial
          </span>
        </div>
        <div className= "registerRight">
          <form className= "registerBox" onSubmit= {handleClick}>

            <input placeholder= "Username"              className= "registerInput" ref= {username}        required />
            <input placeholder= "Email"                 className= "registerInput" ref= {email}           required type= "email" />
            <input placeholder= "Password"              className= "registerInput" ref= {password}        required type= "password" minLength= "6"/>
            <input placeholder= "Confirm your Password" className= "registerInput" ref= {confirmPassword} required type= "password" minLength= "6"/>

            <button className= "registerButton" type= "submit">Sign Up</button>
            <button className= "registerRegisterButton">
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  )
} 

export default Register