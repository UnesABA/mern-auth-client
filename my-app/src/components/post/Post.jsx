import "./post.css"
import { MoreVert } from "@mui/icons-material"

const Post = () => {
  return (
    <div className= "post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="/assets/person/simon.jpg" className="postProfileImg" />
            <span className="postUserName">Younes Hra</span>
            <span className="postDate">5 min ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">
            Hey it's my first post :)
          </span>
          <img src="/assets/post/6.jpg" className= "postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className= "postLikeIcon" src="/assets/post/like.png" />
            <img className= "postLikeIcon" src="/assets/post/heart.png" />
            <span className="postLikeCounter">166 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">
              9 comments
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post