import "./rightbar.css"
import { Users }               from "../../dummyData"
import Online                  from '../online/Online'
import { useEffect, useState } from "react"
import axios                   from "axios"
import { Link }                from 'react-router-dom'                   

const Rightbar = ({ user }) => {
  const PF = import.meta.env.VITE_PUBLIC_FOLDER
  const [friends, setFriends] = useState([])

  useEffect(() =>{
    const getFriends = async () =>{
      if(user._id){
        try {
          const friendList = await axios.get("http://localhost:5000/api/users/friends/" + user._id)
          setFriends(friendList.data)
        } catch (error) {
          console.log(error)
        }
      }
    }

    getFriends()
  }, [user._id])

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
          {friends.map((friend) =>(
            <Link to= {"/profile/" + friend.username} style= {{textDecoration: "none"}}>
              <div className="rightbarFollowing">
                <img 
                  src={friend.profilePicture ? PF + friend.profilePicture : PF + "person/noAvatar.png"}  
                  className="rightbarFollowingImg" 
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
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