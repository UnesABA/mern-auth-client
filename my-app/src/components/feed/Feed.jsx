  import "./feed.css"
  import Share                   from '../share/Share'
  import Post                    from "../post/Post"
  import axios                   from "axios"
  import { useEffect, useState } from "react"

  const Feed = ({username}) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const res = username 
            ? await axios.get("http://localhost:5000/api/posts/profile/" + username) 
            : await axios.get("http://localhost:5000/api/posts/timeline/67e1d7b56a61477b59750000")

          setPosts(res.data || [])
        } catch (error) {
          console.error("Error fetching posts:", error)
          setPosts([])
        }
      }
      fetchPosts()
    }, [username])  

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