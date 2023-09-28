import React, { useState, useEffect, useRef } from 'react';
import './BlockPopupModal.css'

const BlockPopupModal = ({ top, left, onClose, onColorChange, onDelete, onNameChange, onAssignURL, currentName, currentURL }) => {
  const [localName, setLocalName] = useState(currentName);
  const [localURL, setLocalURL] = useState(currentURL);
  const modalRef = useRef(null);

  useEffect(() => {
    setLocalName(currentName);
    setLocalURL(currentURL);
  }, [currentName, currentURL]);

  const handleLocalNameChange = (e) => {
    setLocalName(e.target.value);
  };

  const handleLocalURLChange = (e) => {
    setLocalURL(e.target.value);
  };

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Stop event propagation
    onNameChange(localName);
    onAssignURL(localURL);
    onClose();
  };

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Stop event propagation
    onDelete(); // Call the onDelete function passed as a prop
    onClose(); // Close the modal
  };

  const handleColorBoxClick = (color) => {
    onColorChange(color);
  };

  return (
    <div ref={modalRef} className="block-popup-modal" style={{ top: `${top}px`, left: `${left}px` }}>
      <div>
        <label>Status:</label>
        <div className="color-boxes">
          <div className="color-box" style={{ backgroundColor: 'lightgrey' }} onClick={() => handleColorBoxClick('lightgrey')}></div>
          <div className="color-box" style={{ backgroundColor: 'lightgreen' }} onClick={() => handleColorBoxClick('lightgreen')}></div>
          <div className="color-box" style={{ backgroundColor: 'lightyellow' }} onClick={() => handleColorBoxClick('lightyellow')}></div>
          <div className="color-box" style={{ backgroundColor: '#FFCCCB' }} onClick={() => handleColorBoxClick('#FFCCCB')}></div>
          <div className="color-box" style={{ backgroundColor: 'lightblue' }} onClick={() => handleColorBoxClick('lightblue')}></div>
        </div>
      </div>
      <div>
        <label>Name:</label>
        <input type="text" value={localName} onChange={handleLocalNameChange} />
      </div>
      <div>
        <label>URL:</label>
        <input type="text" value={localURL} onChange={handleLocalURLChange} />
      </div>
      <button onClick={(e) => handleClose(e)}>Close</button>
      <button onClick={(e) => handleDelete(e)}>Delete</button>
      <button onClick={(e) => handleClose(e)}>Save</button>
    </div>
  );
};

export default BlockPopupModal;
