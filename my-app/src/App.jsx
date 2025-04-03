import "./index.css"
import Home     from "./components/pages/home/Home"
import Profile  from "./components/pages/profile/Profile"
import Login    from "./components/pages/login/Login"
import Register from "./components/pages/register/Register"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path= "/"            element= {<Home />} />
          <Route path= "/login"             element= {<Login />} />
          <Route path= "/register"          element= {<Register />} />
          <Route path= "/profile/:username" element= {<Profile />} />
        </Routes>
      </Router>
    </>
  )
}

export default App