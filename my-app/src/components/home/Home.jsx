import Feed     from "../feed/Feed"
import Rightbar from "../rightbar/Rightbar"
import Sidebar  from "../sidebar/Sidebar"
import Topbar   from "../topbar/Topbar"

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
      
    </>
  )
}

export default Home