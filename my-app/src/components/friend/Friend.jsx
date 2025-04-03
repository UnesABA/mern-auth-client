import "./friend.css"

const Friend = ({user}) => {
  const PF = import.meta.env.VITE_PUBLIC_FOLDER

  return (
    <div>
      <li className="sidebarFriend">
        <img src= {PF+user.profilePicture} className="sidebarFriendImg" />
        <span className="sidebarFriendName">{user.username}</span>
      </li>
    </div>
  )
}

export default Friend