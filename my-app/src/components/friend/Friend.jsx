import "./friend.css"

const Friend = ({user}) => {
  return (
    <div>
      <li className="sidebarFriend">
        <img src= {user.profilePicture} className="sidebarFriendImg" />
        <span className="sidebarFriendName">{user.username}</span>
      </li>
    </div>
  )
}

export default Friend