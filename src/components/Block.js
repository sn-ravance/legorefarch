import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import BlockPopupModal from './BlockPopupModal';

const Block = ({ id, color, text, swimlane, onMoveBlock, onDeleteBlock, blocks, setBlocks }) => {
  const [blockColors, setBlockColors] = useState({});
  const [editedText, setEditedText] = useState(text);
  const [blockURL, setBlockURL] = useState(''); // State to manage block URL
  const [showPopup, setShowPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState(null);

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
    setShowPopup(false);
  };

  const handleDelete = () => {
    onDeleteBlock(id);
    setShowPopup(false);
    const newBlocks = blocks.filter((block) => block.id !== id);
    setBlocks(newBlocks);
  };

  const handleNameChange = (newName) => {
    setEditedText(newName);
    setShowPopup(false);
  };

  const handleAssignURL = (newURL) => {
    setBlockURL(newURL);
    setShowPopup(false);
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    setPopupPosition({ top: e.clientY, left: e.clientX });
    setShowPopup(true);
  };

  return (
    <div
      ref={drag}
      className={`block ${isDragging ? 'dragging' : ''}`}
      style={{ backgroundColor: blockColor }}
      onContextMenu={handleRightClick}
      onClick={() => blockURL && window.open(blockURL, '_blank')}
    >
      <div>{editedText}</div>
      {blockURL && <div className="block-url">{blockURL}</div>}
      {onMoveBlock && <span className="move-icon"></span>}
      {showPopup && (
        <BlockPopupModal
          top={popupPosition.top}
          left={popupPosition.left}
          onClose={() => setShowPopup(false)}
          onColorChange={handleColorChange}
          onDelete={handleDelete}
          onNameChange={handleNameChange}
          onAssignURL={handleAssignURL}
          currentName={editedText}
          currentURL={blockURL}
        />
      )}
    </div>
  );
};

export default Block;
