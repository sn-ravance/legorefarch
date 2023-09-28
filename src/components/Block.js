import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import BlockPopupModal from './BlockPopupModal';

const Block = ({ id, color, text, swimlane, onMoveBlock, onDeleteBlock, blocks, setBlocks, handleDeleteBlock, handleMoveBlock }) => {

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
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        if (handleMoveBlock) {
          handleMoveBlock(item.id, dropResult.name);
        } else {
          console.error("handleMoveBlock is undefined");
        }
      }
    },
  });

  const handleColorChange = (newColor) => {
    setBlockColors((prevBlockColors) => ({
      ...prevBlockColors,
      [id]: newColor,
    }));
    const updatedBlock = blocks.find(block => block.id === id);
    if (updatedBlock) {
      updatedBlock.color = newColor;
      setBlocks(prevBlocks => prevBlocks.map(block => block.id === id ? updatedBlock : block));
    }
    setShowPopup(false);
  };

  const handleNameChange = (newName) => {
    setEditedText(newName);
    const updatedBlock = blocks.find(block => block.id === id);
    if (updatedBlock) {
      updatedBlock.text = newName;
      setBlocks(prevBlocks => prevBlocks.map(block => block.id === id ? updatedBlock : block));
    }
    setShowPopup(false);
  };

  const handleAssignURL = (newURL) => {
    setBlockURL(newURL);
    const updatedBlock = blocks.find(block => block.id === id);
    if (updatedBlock) {
      updatedBlock.url = newURL;  // Assuming 'url' is the attribute name for URLs
      setBlocks(prevBlocks => prevBlocks.map(block => block.id === id ? updatedBlock : block));
    }
    setShowPopup(false);
  };

  const handleDelete = () => {
    onDeleteBlock(id);
    setShowPopup(false);
    const newBlocks = blocks.filter((block) => block.id !== id);
    setBlocks(newBlocks);
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
      onClick={() => blockURL && window.open(blockURL, '_blank')} // Open the URL in a new tab when the block is clicked
    >
      <div>{editedText}</div>
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
