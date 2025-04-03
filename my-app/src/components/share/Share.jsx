import "./share.css"
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material"

const Share = () => {
  const PF = import.meta.env.VITE_PUBLIC_FOLDER

  return (
    <div className= "share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src= {`${PF}person/simon.jpg`} className="shareProfileImg" />
          <input 
            placeholder="What's in your mind Younes ?" 
            className="shareInput" 
          />
        </div>
        <hr className="shareHr" />
        
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor= "green" className= "shareIcon"/>
              <span className= "shareOptionText">
                Photo or Video
              </span>
            </div>
            <div className="shareOption">
              <Label htmlColor= "blue" className= "shareIcon"/>
              <span className= "shareOptionText">
                Tag
              </span>
            </div>
            <div className="shareOption">
              <Room htmlColor= "red" className= "shareIcon"/>
              <span className= "shareOptionText">
                Location
              </span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor= "goldenrod" className= "shareIcon"/>
              <span className= "shareOptionText">
                Feelings
              </span>
            </div>
          </div>
          <button className= "shareButton">Share</button>
        </div>
      </div>
    </div>
  )
}

export default Share