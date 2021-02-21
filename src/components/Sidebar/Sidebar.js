import './Sidebar.css'

function Sidebar({
  title,
  setSidebarShown,
  isSidebarShown,
  setLikedCharactersShown,
  showLikedCharacters,
  setNotLikedCharactersShown,
  showNotLikedCharacters,
}) {
  return (
    <>
      <div hidden={!isSidebarShown} className="Sidebar">
        <div>{title}</div>
        <button
          className="Sidebar__closeButton "
          onClick={() => setSidebarShown(!isSidebarShown)}
        >
          x <img src="../../styles/close-button.png" alt="" />
        </button>
        <ul>
          <li className="Sidebar__filters">Liked Characters</li>
          <li className="Sidebar__filters">
            <input
              type="checkbox"
              name="isLiked"
              value="liked"
              onClick={() => setLikedCharactersShown(!showLikedCharacters)}
            />
            <label htmlFor="isLiked"> Liked</label>
          </li>
          <li className="Sidebar__filters">
            <input
              type="checkbox"
              name="isLiked"
              value="notLiked"
              onClick={() =>
                setNotLikedCharactersShown(!showNotLikedCharacters)
              }
            />
            <label htmlFor="isLiked"> Not Liked</label>
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
