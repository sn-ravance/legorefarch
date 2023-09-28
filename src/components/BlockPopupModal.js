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
    onNameChange(localName);
    onAssignURL(localURL);
    onClose();
  };

  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(); // Call the onDelete function passed as a prop
    onClose(); // Close the modal
  };

  return (
    <div ref={modalRef} className="block-popup-modal" style={{ top: `${top}px`, left: `${left}px` }}>
      <div>
        <label>Status:</label>
        <input type="color" onChange={(e) => onColorChange(e.target.value)} />
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
