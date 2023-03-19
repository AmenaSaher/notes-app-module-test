import React, { useState } from 'react'
import './notespace.min.css'


export const NoteSpace = ({groups,onUpdateNote,activeNote,handleText,notes,handleSubmit,newNote,setNewNote,setNotes}) => {
    
    
    const [newNotes,setNewNotes] = useState([])
    
    const addItems = () =>{
        const item = {
            value: activeNote.body
        }

        setNewNotes(oldList => [...oldList,item.value])
        
        // console.log(groups[1].id)
        
    }
    if(!activeNote) return <div className='no-notes-div'></div>
    // if(!newNotes) return <div></div>
    
    
    const onEditField = (key,value) => {
        onUpdateNote({
            ...activeNote,
            [key]:value,
            lastMod : Date.now(),
            notess:'',
            // newNotes: [newNotes]
        })
        
    }
    return (
    <div className='space-wrapper'>
        
        <div className='header'>
            <span className='dot2' style={{backgroundColor: activeNote.bgcolor}}><small className='icon-text-notes'>{`${activeNote.title}`.split(" ").map((n)=>n[0]).join("").toUpperCase()}</small></span>
            <h3>{activeNote.title}</h3>
        </div>
        <div className='notes-wrapper'>
        <div className='main-notes'>
            <div className='time-date'>
            
                {/* <h3>10:10 Am</h3>
                <h3>9 March 2023</h3> */}
            </div>
            {/* {activeNote.body.split(" ").map((nts)=>( <p className='main-text'>{activeNote.body}</p>))} */}
            
            <div>
                
                {  newNotes.map( item =>{
                    
                    return <div className='main-notes'>
                        <div className='time-date'>
                        {new Date(activeNote.lastMod).toLocaleDateString("en-GB",{
                        hour:'2-digit',
                        minute: '2-digit'
                    })}
                    </div>
                        <p className='main-text'>{item}</p>
                        </div>
                    
                    
                })} 
{/* {activeNote.part && activeNote.part.map( itm =>( <p className='main-text'>{itm}</p>))} */}
                {/* {activeNote.body} */}
                </div>
        </div>
        </div>
        <div className='text-area-wrap'>
            <textarea onChange={(e)=> {onEditField("body",e.target.value);  }} value={activeNote.body} className="" placeholder='Enter your text here...........'>
            </textarea>
            <button onClick={()=> {
                onEditField('part',newNote)
                addItems()
                
                console.log(groups[0])
                }}>Submit</button>
            

        </div>
    </div>
  )
}
