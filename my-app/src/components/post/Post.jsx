import "./post.css"
import { MoreVert }                        from "@mui/icons-material"
import axios                               from "axios"
import { useContext, useEffect, useState } from "react"
import { format }                          from "timeago.js"
import { Link }                            from "react-router-dom"
import { AuthContext }                     from "../../context/AuthContext"

const Post = ({post}) => {
  const [user, setUser]       = useState({})
  const [like, setLike]       = useState(post.likes.length)
  const [isLiked, setIsLiked] = useState(false)
  const { user: currentUser}  = useContext(AuthContext)
  const PF = import.meta.env.VITE_PUBLIC_FOLDER

  useEffect(() =>{
    setIsLiked(post.likes.includes(currentUser._id))
  }, [post.likes, currentUser._id])

  useEffect(() =>{
    const fetchUser = async () =>{
      const res = await axios.get(`http://localhost:5000/api/users?userId=${post.userId}`)
      setUser(res.data)
    }
    fetchUser()
  }, [post.userId])

  const likeHandler = () =>{
    try {
      axios.put("http://localhost:5000/api/posts/"+ post._id + "/like", {userId: currentUser._id})
    } catch (error) {
      console.log(error)
    }
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }

  return (
    <div className= "post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to= {`/profile/${user.username}`}>
              <img 
                src      = {user.profilePicture 
                  ? PF + user.profilePicture 
                  : PF + "person/noAvatar.png"} 
                className="postProfileImg" 
              />
            </Link>
            <span className="postUserName">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">
            {post?.description}
          </span>
          <img src= {PF +post.image} className= "postImg" /> {/* image */}
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className= "postLikeIcon" src={`${PF}post/like.png`} onClick={likeHandler} />
            <img className= "postLikeIcon" src={`${PF}post/heart.png`} onClick={likeHandler} />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">
              {post.comment} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post