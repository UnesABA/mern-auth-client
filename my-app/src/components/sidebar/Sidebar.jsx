import "./sidebar.css"
import { RssFeed, Chat, OndemandVideo, Groups, Bookmark, HelpOutline, Work, Event, MenuBook } from "@mui/icons-material"

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
            <li className="sidebarFriend">
              <img src="/assets/person/1.jpg" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Malika chergui</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/2.jpg" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Fatna Saadaoui</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/3.jpg" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Samira Debbagh</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/4.jpg" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Milouda Ait lmoudden</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/5.jpg" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Soufyan Nemli</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/6.jpg" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Hafid Waqar</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/7.jpg" className="sidebarFriendImg" />
              <span className="sidebarFriendName">abdellah Lkilani</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/8.jpg" className="sidebarFriendImg" />
              <span className="sidebarFriendName">abdelwahed Chkilit</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/9.jpg" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Rabab Lfatmi</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/10.jpg" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Nossayba Lwaadoudi</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/11.jpg" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Ramez Laayan</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/12.jpg" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Lmokhtar Ait Lmahi</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/13.jpg" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Lhaj AbdelKarim</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assets/person/14.jpg" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Bilal Faraji</span>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default Sidebar