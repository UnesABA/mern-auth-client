import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"

function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">YounesSocial</span>

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
            <span className="tobarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="tobarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="tobarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/simon.jpg" alt="" className="topbarImg" />
      </div>
    </div>
  )
}

export default Topbar