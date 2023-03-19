import React from 'react'
import './sidebar.min.css'

export const Sidebar = ({groups,openModalFunc,activeNote,setActiveNote,notes,setNotes,setNewNote}) => {

  const sortedGroups = groups.sort((a,b) => b.lastMod - a.lastMod)
  return (
    <div className='sidebar-wrap'>
        <h3 className='title-pocket'>Pocket Notes</h3>
        <div> 
            <button className='create-btn' onClick={openModalFunc}><small>+</small> Create Notes</button>
        </div>
        {sortedGroups.map((group) => (
          <div className={`group-name ${group.id === activeNote && 'active'}`} onClick={() => {
            setActiveNote(group.id)
            setNotes("")
            
            }}
            >
            <span class="dot" style={{backgroundColor: group.bgcolor}}><small className='icon-text'>{`${group.title}`.split(" ").map((n)=>n[0]).join("").toUpperCase()}</small></span>
            <h4>{group.title}</h4>
        </div>
        ))}
        
    </div>
  )
}
