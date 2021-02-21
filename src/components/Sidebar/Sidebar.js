import './Sidebar.css'

function Sidebar({ title, setSidebarShown, isSidebarShown }) {
  return (
    <>
      <div hidden={!isSidebarShown} className="Sidebar">
        <div>{title}</div>
        <button
          className="Sidebar__closeButton "
          onClick={() => setSidebarShown(!isSidebarShown)}
        >
          <bold>x</bold> <img src="../../styles/close-button.png" alt="" />
        </button>
        <ul>
          <li className="Sidebar__filters">Liked Characters</li>
          <li className="Sidebar__filters">
            <input type="checkbox" name="isLiked" value="liked" />
            <label for="isLiked"> Liked</label>
          </li>
          <li className="Sidebar__filters">
            <input type="checkbox" name="isLiked" value="notLiked" />
            <label for="isLiked"> Not Liked</label>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar

/* 
style={{isSidebarShown ? width: 100 + 'px' : width: 0 + 'px'}}
style={{isSidebarShown ? marginLeft: 100 + 'px'  : marginLeft: 0 }}
*/
