import Feed     from "../../feed/Feed"
import Rightbar from "../../rightbar/Rightbar"
import Sidebar  from "../../sidebar/Sidebar"
import Topbar   from "../../topbar/Topbar"
import "./profile.css"

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src="assets/post/4.jpg" className= "profileCoverImg" />
              <img src="assets/person/simon.jpg" className= "profileUserImg" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Younes AIT BEN ALI</h4>
              <span className="profileInfoDescription">Hey ! it's me Younes</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile