import "./rightbar.css"

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
        <ul className="rightbarFriendList">
          <li className="tightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img 
                src="/assets/person/2.jpg"
                className="rightbarProfileImg" 
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Fatna Saadaoui</span>
          </li>
          <li className="tightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img 
                src="/assets/person/3.jpg"
                className="rightbarProfileImg" 
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Samira Debbagh</span>
          </li>
          <li className="tightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img 
                src="/assets/person/6.jpg"
                className="rightbarProfileImg" 
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Hafid Waqar</span>
          </li>
          <li className="tightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img 
                src="/assets/person/8.jpg"
                className="rightbarProfileImg" 
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">abdelwahed Chkilit</span>
          </li>
          <li className="tightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img 
                src="/assets/person/10.jpg"
                className="rightbarProfileImg" 
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Nossayba Lwaadoudi</span>
          </li>
          <li className="tightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img 
                src="/assets/person/5.jpg"
                className="rightbarProfileImg" 
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Soufyan Nemli</span>
          </li>
          <li className="tightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img 
                src="/assets/person/7.jpg"
                className="rightbarProfileImg" 
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">abdellah Lkilani</span>
          </li>
          <li className="tightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img 
                src="/assets/person/12.jpg"
                className="rightbarProfileImg" 
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Lmokhtar Ait Lmahi</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Rightbar