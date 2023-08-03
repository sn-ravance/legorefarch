import React from 'react';
import { useDrag } from 'react-dnd';

const Block = ({ id, color, text, swimlane, onMoveBlock }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'BLOCK',
    item: { id, swimlane },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`block ${isDragging ? 'dragging' : ''}`}
      style={{ backgroundColor: color }}
    >
      {text}
      {onMoveBlock && <span className="move-icon">🔃</span>}
    </div>
  );
};

export default Block;
