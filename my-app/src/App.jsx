import Home            from "./components/pages/home/Home"
import Profile         from "./components/pages/profile/Profile"
import Login           from "./components/pages/login/Login"
import Register        from "./components/pages/register/Register"
import { useContext }  from "react"
import { AuthContext } from "./context/AuthContext"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
}                      from "react-router-dom";
import "./index.css"

function App() {
  const { user } = useContext(AuthContext)
  console.log(user)

  return (
    <>
      <Router>
        <Routes>
          <Route exact path= "/"            element= {user ? <Home /> : <Register />} />
          <Route path= "/login"             element= {user ? <Navigate to= "/" /> : <Login />} />
          <Route path= "/register"          element= {user ? <Navigate to= "/" /> : <Register />} />
          <Route path= "/profile/:username" element= {<Profile />} />
        </Routes>
      </Router>
    </>
  )
}

export default App