import React from 'react';
import { useDrop } from 'react-dnd';

const Lane = ({ title, onDropBlock, onAddBlock, children }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'BLOCK',
    drop: item => {
      onDropBlock(item.id, title);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const handleDoubleClick = () => {
    onAddBlock(title);
  };

  return (
    <div
      ref={drop}
      className={`lane ${isOver ? 'highlighted' : ''}`}
      onDoubleClick={handleDoubleClick} // Add double-click handler
    >
      <div className="blocks">
        {children}
      </div>
    </div>
  );
};
export default Lane;