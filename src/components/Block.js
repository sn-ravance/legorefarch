import React, { useState } from 'react';
import { useDrag } from 'react-dnd';

const ContextMenu = ({ top, left, onClose, onColorChange, onDelete }) => {
  return (
    <div className="context-menu" style={{ top: `${top}px`, left: `${left}px` }}>
      <div
        className="color-option"
        onClick={() => onColorChange('lightgrey')}
        style={{ backgroundColor: 'lightgrey' }}
      >
        Light Grey
      </div>
      <div
        className="color-option"
        onClick={() => onColorChange('lightgreen')}
        style={{ backgroundColor: 'lightgreen' }}
      >
        Light Green
      </div>
      <div
        className="color-option"
        onClick={() => onColorChange('lightyellow')}
        style={{ backgroundColor: 'lightyellow' }}
      >
        Light Yellow
      </div>
      <div
        className="color-option"
        onClick={() => onColorChange('#FFCCCB')}
        style={{ backgroundColor: '#FFCCCB' }}
      >
        Light Red
      </div>
      <div
        className="color-option"
        onClick={() => onColorChange('lightblue')}
        style={{ backgroundColor: 'lightblue' }}
      >
        Light Blue
      </div>
      <div className="color-option delete-option" onClick={onDelete}>
        Delete
      </div>
    </div>
  );
};

const Block = ({ id, color, text, swimlane, onMoveBlock, onDeleteBlock, blocks, setBlocks }) => {
  const [blockColors, setBlockColors] = useState({}); // State to manage block colors
  const [editedText, setEditedText] = useState(text); // State to manage the edited text
  const [isEditing, setIsEditing] = useState(false); // State to track if the block is being edited
  const [contextMenuPosition, setContextMenuPosition] = useState(null);

  const blockColor = blockColors[id] || color;

  const [{ isDragging }, drag] = useDrag({
    type: 'BLOCK',
    item: { id, swimlane },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const handleColorChange = (newColor) => {
    setBlockColors((prevBlockColors) => ({
      ...prevBlockColors,
      [id]: newColor,
    }));
    setContextMenuPosition(null);
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    setContextMenuPosition({ top: e.clientY, left: e.clientX });
  };

  const handleDelete = () => {
    // Call the onDeleteBlock function to delete the block
    onDeleteBlock(id);
    setContextMenuPosition(null);
    const newBlocks = blocks.filter((block) => block.id !== id);
    setBlocks(newBlocks);
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleTextChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleTextBlur = () => {
    setIsEditing(false);
    if (editedText.trim() !== '') {
      setEditedText(editedText);
    } else {
      setEditedText(text || 'Edit Me!');
    }
  };

  return (
    <div
      ref={drag}
      className={`block ${isDragging ? 'dragging' : ''}`}
      style={{ backgroundColor: blockColor }}
      onContextMenu={handleContextMenu}
      onDoubleClick={handleDoubleClick}
    >
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={handleTextChange}
          onBlur={handleTextBlur}
          autoFocus
        />
      ) : (
        <div>{editedText}</div>
      )}
      {onMoveBlock && <span className="move-icon"></span>}
      {contextMenuPosition && (
        <ContextMenu
          top={contextMenuPosition.top}
          left={contextMenuPosition.left}
          onClose={() => setContextMenuPosition(null)}
          onColorChange={handleColorChange}
          onDelete={handleDelete} 
        />
      )}
    </div>
  );
};

export default Block;
