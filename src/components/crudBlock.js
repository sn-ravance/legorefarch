// crudBlock.js
import React, { useState } from 'react';

const CrudBlock = ({ onAddBlock }) => {
  const [newBlockText, setNewBlockText] = useState('');

  const handleTextChange = (e) => {
    setNewBlockText(e.target.value);
  };

  const handleAddBlock = () => {
    if (newBlockText) {
      onAddBlock({
        id: Date.now(),
        color: 'transparent',
        swimlane: 'Legend',
        text: newBlockText,
      });
      setNewBlockText('');
    }
  };

  return (
    <div
      className={`addblock`}
      style={{ backgroundColor: 'lightgrey' }}
    >
      <input
        type="text"
        value={newBlockText}
        onChange={handleTextChange}
        placeholder="Block Name"
      />
      <button onClick={handleAddBlock}>Add Block</button>
    </div>
  );
};

export default CrudBlock;
