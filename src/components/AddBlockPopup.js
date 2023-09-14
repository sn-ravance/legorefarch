import React, { useState } from 'react';

const AddBlockPopup = ({ onAddBlock }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [newBlockText, setNewBlockText] = useState('');

  const handleTextChange = (e) => {
    setNewBlockText(e.target.value);
  };

  const handleAddBlock = () => {
    if (newBlockText) {
      onAddBlock({
        id: Date.now(),
        color: 'transparent',
        swimlane: 'Access Control',
        text: newBlockText,
      });
      setNewBlockText('');
      setShowPopup(false);
    }
  };

  return (
    <React.Fragment>
      <button onClick={() => setShowPopup(true)} className='add-button'>
        Add Block
      </button>
      {showPopup && (
        <div className="popup">
          <input
            type="text"
            value={newBlockText}
            onChange={handleTextChange}
            placeholder="Block Name"
          />
          <button onClick={handleAddBlock}>Add</button>
          <button onClick={() => setShowPopup(false)}>Cancel</button>
        </div>
      )}
    </React.Fragment>
  );
};

export default AddBlockPopup;
