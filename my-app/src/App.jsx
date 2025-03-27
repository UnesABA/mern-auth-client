import Sidebar from "./components/sidebar/Sidebar"
import Topbar  from "./components/topbar/Topbar"

function App() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
      </div>
    </>
  )
}

export default App
