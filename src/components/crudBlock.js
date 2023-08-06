// crudBlock.js
import React, { useState } from 'react';
import { useDrag } from 'react-dnd';

const CrudBlock = ({ onAddBlock }) => {
  const [newBlockText, setNewBlockText] = useState('');

  const [{ isDragging }, drag] = useDrag({
    type: 'BLOCK',
    item: {
      id: Date.now(), // Generate a unique ID for the new block
      color: 'lightgrey', // Default color
      swimlane: 'Access Control', // Default swimlane
      text: newBlockText,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const handleTextChange = (e) => {
    setNewBlockText(e.target.value);
  };

  const handleAddBlock = () => {
    if (newBlockText) {
      onAddBlock({
        id: Date.now(),
        color: 'lightgrey',
        swimlane: 'Access Control',
        text: newBlockText,
      });
      setNewBlockText('');
    }
  };

  return (
    <div
      ref={drag}
      className={`block ${isDragging ? 'dragging' : ''}`}
      style={{ backgroundColor: 'lightgrey' }}
    >
      <input
        type="text"
        value={newBlockText}
        onChange={handleTextChange}
        placeholder="Enter text"
      />
      <button onClick={handleAddBlock}>Add Block</button>
    </div>
  );
};

export default CrudBlock;
