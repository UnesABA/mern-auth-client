import Share                               from "../share/Share"
import Post                                from "../post/Post"
import axios                               from "axios"
import { useContext, useEffect, useState } from "react"
import { AuthContext }                     from "../../context/AuthContext"
import "./feed.css"

  const Feed = ({username}) => {
    const [posts, setPosts] = useState([])
    const { user }          = useContext(AuthContext)

    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const res = username 
            ? await axios.get("http://localhost:5000/api/posts/profile/" + username) 
            : await axios.get("http://localhost:5000/api/posts/timeline/" + user._id)

          setPosts(res.data || [])
        } catch (error) {
          console.error("Error fetching posts:", error)
          setPosts([])
        }
      }
      fetchPosts()
    }, [username, user._id])  

    return (
      <div className= "feed">
        <div className="feedWrapper">
          <Share />
          {posts.map((post) =>(
            <Post key= {post._id} post= {post}/>
          ))}
        </div>
      </div>
    )
  }

  export default Feed