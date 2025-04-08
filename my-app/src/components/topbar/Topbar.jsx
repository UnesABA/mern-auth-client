import { Search, Person, Chat, Notifications } from "@mui/icons-material"
import { useContext }                          from "react"
import { Link }                                from "react-router-dom"
import { AuthContext }                         from "../../context/AuthContext"
import "./topbar.css"

function Topbar() {
  const {user} = useContext(AuthContext)
  const PF = import.meta.env.VITE_PUBLIC_FOLDER

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
      <Link to= "/" style= {{textDecoration: "none"}}>
        <span className="logo">YounesSocial</span>
      </Link>

      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className= "searchIcon"/>
          <input placeholder= "Search for friends, posts or videos" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="tobarIconBadge">10</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="tobarIconBadge">21</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="tobarIconBadge">15</span>
          </div>
        </div>
        <Link to= {`/profile/${user.username}`}>
          <img 
            src={user.profilePicture 
              ? PF + user.profilePicture 
              : PF + "person/noAvatar.png"}
            className="topbarImg" 
          />
        </Link>
      </div>
    </div>
  )
}

export default Topbar