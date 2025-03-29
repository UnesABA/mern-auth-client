import "./sidebar.css"
import { RssFeed, Chat, OndemandVideo, Groups, Bookmark, HelpOutline, Work, Event, MenuBook } from "@mui/icons-material"
import Friend     from "../friend/Friend"
import { Users }  from "../../dummyData"

const Sidebar = () => {
  return (
    <div className= "sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className= "sidebarIcon"/>
            <span className="sidebarListItemtext">
              Feed
            </span>
          </li>
          <li className="sidebarListItem">
            <Chat className= "sidebarIcon"/>
            <span className="sidebarListItemtext">
              Chats
            </span>
          </li>
          <li className="sidebarListItem">
            <OndemandVideo className= "sidebarIcon"/>
            <span className="sidebarListItemtext">
              Videos
            </span>
          </li>
          <li className="sidebarListItem">
            <Groups className= "sidebarIcon"/>
            <span className="sidebarListItemtext">
              Groups
            </span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className= "sidebarIcon"/>
            <span className="sidebarListItemtext">
              Bookmarks
            </span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className= "sidebarIcon"/>
            <span className="sidebarListItemtext">
              Questions
            </span>
          </li>
          <li className="sidebarListItem">
            <Work className= "sidebarIcon"/>
            <span className="sidebarListItemtext">
              Jobs
            </span>
          </li>
          <li className="sidebarListItem">
            <Event className= "sidebarIcon"/>
            <span className="sidebarListItemtext">
              Events
            </span>
          </li>
          <li className="sidebarListItem">
            <MenuBook className= "sidebarIcon"/>
            <span className="sidebarListItemtext">
              Courses
            </span>
          </li>
        </ul>
          <button className= "sidebarButton">
            Show More
          </button>
          <hr className= "sidebarHr"/>
          <ul className="sidebarFriendList">
            {Users.map(user =>(
              <Friend key= {user.id} user= {user}/>
            ))}
          </ul>
      </div>
    </div>
  )
}

export default Sidebar