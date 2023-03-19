import './modal.min.css'


const Modal = ({addGroup,handleChange,handleColor}) =>{

    return(
        <div className="modal-background">
            <div className="modalContainer">
                <h3>Create New Notes</h3>
                <div className='groupName'>
                    <h3>Group Name</h3>
                    <input type='text' placeholder="Enter your group name...." className='group-input' 
                    onChange={handleChange}/>
                </div>
                <div className='color-group'>
                    <h3>Choose colour</h3>
                    <span className="dots" tabindex="-1" style={{backgroundColor: '#B38BFA'}} onClick={handleColor}></span>
                    <span className="dots" tabindex="-1" style={{backgroundColor: '#FF79F2'}} onClick={handleColor}></span>
                    <span className="dots" tabindex="-1" style={{backgroundColor: '#43E6FC'}} onClick={handleColor}></span>
                    <span className="dots" tabindex="-1" style={{backgroundColor: '#F19576'}} onClick={handleColor}></span>
                    <span className="dots" tabindex="-1" style={{backgroundColor: '#0047FF'}} onClick={handleColor}></span>
                    <span className="dots" tabindex="-1" style={{backgroundColor: '#6691FF'}} onClick={handleColor}></span>
                </div>
                <div className='btn-div'>
                    <button onClick={addGroup} className='modal-btn'>Create</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;