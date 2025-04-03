import "./rightbar.css"
import { Users } from "../../dummyData"
import Online    from '../online/Online'

const Rightbar = ({user}) => {
  const PF = import.meta.env.VITE_PUBLIC_FOLDER

  const HomeRightbar = ()=>{
    return(
      <>
        <div className= "birthdayContainer">
          <img 
            src= {`${PF}gift.png`} 
            className= "birthdayImg" 
          />
          <span className= "birthdayText">
            <b>Lhaj AbdelKarim</b> and <b>2 other friends</b> have a birthday today
          </span>
        </div>
        <img 
          src={`${PF}ad.jpg`}
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
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From :</span>
            <span className="rightbarInfoValue">{user.form}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship :</span>
            <span className="rightbarInfoValue">{user.relationship}</span>
          </div>
        </div>

        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={`${PF}person/2.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Fatna Saadaoui</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/1.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Malika chergui</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/6.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Hafid Waqar</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/10.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Nossayba Lwaadoudi</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/13.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Lhaj AbdelKarim</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/7.jpg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">abdellah Lkilani</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className= "rightbar">
      <div className= "rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}

export default Rightbar