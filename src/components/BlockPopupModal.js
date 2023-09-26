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

  const handleClose = () => {
    onNameChange(localName);
    onAssignURL(localURL);
    onClose();
  };

  return (
    <div ref={modalRef} className="block-popup-modal" style={{ top: `${top}px`, left: `${left}px` }}>

      <button onClick={onClose}>Close</button>
      <div>
        <label>Set Color:</label>
        <input type="color" onChange={(e) => onColorChange(e.target.value)} />
      </div>
      <div>
        <label>Change Name:</label>
        <input type="text" value={localName} onChange={handleLocalNameChange} />
      </div>
      <div>
        <label>Assign URL:</label>
        <input type="text" value={localURL} onChange={handleLocalURLChange} />
      </div>
      <button onClick={handleClose}>Close and Save</button>
    </div>
  );
};

export default BlockPopupModal;
