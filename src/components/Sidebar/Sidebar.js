import './Sidebar.css'

function Sidebar({ title, setSidebarShown, isSidebarShown }) {
  return (
    <>
      <div hidden={isSidebarShown} className="Sidebar">
        <div>{title}</div>
        <button
          className="closeBtn"
          onClick={() => setSidebarShown(!isSidebarShown)}
        >
          Close
        </button>
        <ul>
          <li className="Sidebar__Filter">Filter</li>
          <li>More filter</li>
          <li>Whatever</li>
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
