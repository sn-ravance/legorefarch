import React from 'react';
import { useDrop } from 'react-dnd';

const Lane = ({ title, onDropBlock, children }) => {
  const isAccessControl = title === 'Access Control';

  const [{ isOver }, drop] = useDrop({
    accept: 'BLOCK',
    drop: item => {
      onDropBlock(item.id, title);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className={`lane ${isOver ? 'highlighted' : ''}`}>
      <h3>{title}</h3>
      <div className="blocks">
        {children}
      </div>
    </div>
  );
};

export default Lane;