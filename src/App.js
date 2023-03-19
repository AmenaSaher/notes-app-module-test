
import { useEffect, useState } from 'react';
import './App.css';
import uuid from 'react-uuid';
import Modal from './components/Modal';
import { NoteSpace } from './components/NoteSpace';
import { Sidebar } from './components/Sidebar';

function App() {
  const [groups,setGroups] = useState(localStorage.groups ? JSON.parse(localStorage.groups) : [])
  const [openModal,setOpenModal] = useState(false)
  const [groupName,setGroupName] = useState([])
  const [color,setColor] = useState()
  const [activeNote,setActiveNote] = useState(false)
  const [notes,setNotes] = useState([])
const [newNote,setNewNote] = useState([])

useEffect(() =>{
  localStorage.setItem("groups", JSON.stringify(groups))
},[groups])


  const addGroup = () =>{
    const addNewGroup = {
      id: uuid(),
      title: groupName,
      lastMod : Date.now(),
      bgcolor: color
    }
  setGroups([addNewGroup , ...groups])
  setOpenModal(false)
  setGroupName("")
  setColor("")
  }

  const openModalFunc = () =>{
    setOpenModal(true)
  }

  const handleChange = (e) =>{
    setGroupName(e.target.value)

  }

  const handleColor = (event) =>{
    setColor(event.currentTarget.style.backgroundColor)
  }
  
  const getActiveNote = () =>{
    return groups.find((group) => group.id === activeNote)
  }

  const handleText = (e) =>{
    e.preventDefault()

    setNotes(e.target.value)
  }
  
  const onUpdateNote = (updatedNote) =>{
    const updatedNotesArray = groups.map((group)=>{
      if(group.id === activeNote){
        return updatedNote;
      }

      return group;
    })

    setGroups(updatedNotesArray)
    console.log(groups)
  }
  
  return (
    <div className="App">
      <div className='main-divs'>
      <Sidebar 
      groups={groups}  
      openModalFunc={openModalFunc} 
      activeNote={activeNote} 
      setActiveNote={setActiveNote}
      notes={notes}
      setNotes={setNotes}
      setNewNote={setNewNote}
      />

      <NoteSpace 
      activeNote={getActiveNote()} 
      setActiveNote={setActiveNote}
      notes={notes} 
      handleText={handleText}
      setNewNote={setNewNote}
      newNote={newNote}
      setNotes={setNotes}
      groups={groups}
      onUpdateNote={onUpdateNote}/>
  
      </div>
      {openModal && <Modal addGroup={addGroup} handleChange={handleChange} handleColor={handleColor}/>}
    </div>
  );
}

export default App;
