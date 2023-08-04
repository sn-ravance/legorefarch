import React, { useState } from 'react';
import { useDrag } from 'react-dnd';

const ContextMenu = ({ top, left, onClose, onColorChange }) => {
  return (
    <div
      className="context-menu"
      style={{ top: `${top}px`, left: `${left}px` }}
    >
      <div className="color-option" onClick={() => onColorChange('lightgrey')}>
        Light Grey
      </div>
      <div className="color-option" onClick={() => onColorChange('lightgreen')}>
        Light Green
      </div>
      <div className="color-option" onClick={() => onColorChange('lightyellow')}>
        Light Yellow
      </div>
      <div className="color-option" onClick={() => onColorChange('#FFCCCB')}>
        Light Red
      </div>
      <div className="color-option" onClick={() => onColorChange('lightblue')}>
        Light Blue
      </div>
    </div>
  );
};

const Block = ({ id, color, text, swimlane, onMoveBlock }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'BLOCK',
    item: { id, swimlane },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [blockColor, setBlockColor] = useState(color);
  const [contextMenuPosition, setContextMenuPosition] = useState(null);

  const handleColorChange = (newColor) => {
    setBlockColor(newColor);
    setContextMenuPosition(null);
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    setContextMenuPosition({ top: e.clientY, left: e.clientX });
  };

  return (
    <div
      ref={drag}
      className={`block ${isDragging ? 'dragging' : ''}`}
      style={{ backgroundColor: blockColor }}
      onContextMenu={handleContextMenu}
    >
      {text}
      {onMoveBlock && <span className="move-icon"></span>}
      {contextMenuPosition && (
        <ContextMenu
          top={contextMenuPosition.top}
          left={contextMenuPosition.left}
          onClose={() => setContextMenuPosition(null)}
          onColorChange={handleColorChange}
        />
      )}
    </div>
  );
  
};

export default Block;