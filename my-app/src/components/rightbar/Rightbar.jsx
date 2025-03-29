import "./rightbar.css"
import { Users } from "../../dummyData"
import Online    from '../online/Online'

const Rightbar = ({profile}) => {

  const HomeRightbar = ()=>{
    return(
      <>
        <div className= "birthdayContainer">
          <img 
            src= "/assets/gift.png" 
            className= "birthdayImg" 
          />
          <span className= "birthdayText">
            <b>Lhaj AbdelKarim</b> and <b>2 other friends</b> have a birthday today
          </span>
        </div>
        <img 
          src="/assets/ad.jpg" 
          className="rightbarAd"
        />
        <h4 className="rightbarTitle">Online friends</h4>
        <ul className="rightbarFriendList" >
          {Users.map(user =>(
            <Online key= {user.id} user ={user}/>
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = ()=>{
    return (
      <>
        <h4 className="rightbarTitle">User Informations</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City :</span>
            <span className="rightbarInfoValue">Casablanca</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From :</span>
            <span className="rightbarInfoValue">Rich</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship :</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>

        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/2.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Fatna Saadaoui</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Malika chergui</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/6.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Hafid Waqar</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/10.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Nossayba Lwaadoudi</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/13.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Lhaj AbdelKarim</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/7.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">abdellah Lkilani</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className= "rightbar">
      <div className= "rightbarWrapper">
        <ProfileRightbar />
      </div>
    </div>
  )
}

export default Rightbar