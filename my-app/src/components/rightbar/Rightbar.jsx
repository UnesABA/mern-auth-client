import "./rightbar.css"
import { Users } from "../../dummyData"
import Online     from '../online/Online'

const Rightbar = () => {
  return (
    <div className= "rightbar">
      <div className= "rightbarWrapper">
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
      </div>
    </div>
  )
}

export default Rightbar