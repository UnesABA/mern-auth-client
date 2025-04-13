import "./share.css"
import { useContext, useRef, useState }          from "react"
import { AuthContext }                           from "../../context/AuthContext"
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material"
import axios                                     from "axios"
import { Link }                                  from 'react-router-dom'

const Share = () => {
  const [file, setFile] = useState(null)
  const { user }        = useContext(AuthContext)
  const description     = useRef()
  const PF              = import.meta.env.VITE_PUBLIC_FOLDER
 
  const submitHandler = async (event) =>{
    event.preventDefault()
    const newPost = {
      userId      : user._id,
      description : description.current.value
    } 

    if(file){
      const data     = new FormData()
      const fileName = file.name
      data.append("file", file)
      data.append("name", fileName)
      newPost.image = fileName

      try {
        await axios.post("http://localhost:5000/api/upload", data)
      } catch (error) {
        console.log(error)
      }
    }

    try {
      await axios.post("http://localhost:5000/api/posts", newPost)
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className= "share">
      <div className="shareWrapper">
        <div className="shareTop">
          <Link to= {"/profile/" + user.username}>
            <img 
              src       = {user.profilePicture ? PF + user.profilePicture : PF + "assets/person.noAvatar.png"} 
              className = "shareProfileImg" 
            />
          </Link>
          <input 
            placeholder= {`what's in your mind ${user.username} ?`} 
            className  = "shareInput" 
            ref        = {description}
          />
        </div>
        <hr className="shareHr" />
        
        <form className="shareBottom" onSubmit= {submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor= "green" className= "shareIcon"/>
              <span className= "shareOptionText">
              <input 
                style   = {{display: "none"}}
                type    = "file" 
                id      = "file" 
                accept  = ".png, .jpeg, .jpg"
                onChange= {(event) => setFile(event.target.files[0])}
              />
                Photo or Video
              </span>
            </label>
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
        </form>
      </div>
    </div>
  )
}

export default Share