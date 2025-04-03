import "./post.css"
import { MoreVert }            from "@mui/icons-material"
import axios                   from "axios"
import { useEffect, useState } from "react"
import { format }              from "timeago.js"
import { Link }                from "react-router-dom"


const Post = ({post}) => {
  const [user, setUser]       = useState({})
  const [like, setLike]       = useState(post.likes.length)
  const [isLiked, setIsLiked] = useState(false)
  const PF = import.meta.env.VITE_PUBLIC_FOLDER

  useEffect(() =>{
    const fetchUser = async () =>{
      const res = await axios.get(`http://localhost:5000/api/users?userId=${post.userId}`)
      setUser(res.data)
    }
    fetchUser()
  }, [post.userId])

  const likeHandler = () =>{
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
    console.log(user)
  }

  return (
    <div className= "post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to= {`/profile/${user.username}`}>
              <img 
                src= {user.profilePicture || PF+"person/noAvatar.png"} 
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
          <img src= {PF+post.img} className= "postImg" />
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