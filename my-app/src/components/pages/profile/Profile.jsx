import { useEffect, useState } from "react"
import Feed                    from "../../feed/Feed"
import Rightbar                from "../../rightbar/Rightbar"
import Sidebar                 from "../../sidebar/Sidebar"
import Topbar                  from "../../topbar/Topbar"
import axios                   from "axios"
import { useParams }           from "react-router"     
import "./profile.css"

const Profile = () => {
  const PF = import.meta.env.VITE_PUBLIC_FOLDER
  const [user, setUser] = useState({})
  const username = useParams().username

  useEffect(() =>{
    const fetchUser = async () =>{
      const res = await axios.get(`http://localhost:5000/api/users?username=${username}`)
      setUser(res.data)
    }
    fetchUser()
  }, [username])

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src= {user.coverPicture ? PF + user.coverPicture : `${PF}post/4.jpg`} className= "profileCoverImg" />
              <img src= {user.profilePicture ? PF + user.profilePicture : `${PF}person/noAvatar.png`} className= "profileUserImg" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDescription">{user.description}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username= {username}/>
            <Rightbar user= {user}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile