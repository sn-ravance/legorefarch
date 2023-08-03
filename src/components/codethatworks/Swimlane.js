import React from 'react';
import Lane from './Lane';
import Block from './Block';

const Swimlane = ({ blocks, onMoveBlock }) => {
  const swimlanes = {};

  blocks.forEach(block => {
    if (!swimlanes[block.swimlane]) {
      swimlanes[block.swimlane] = [];
    }
    swimlanes[block.swimlane].push(block);
  });

  const handleDropBlock = (blockId, targetSwimlane) => {
    const block = blocks.find(block => block.id === blockId);
    if (block && block.swimlane !== targetSwimlane) {
      onMoveBlock(blockId, targetSwimlane);
    }
  };

  return (
    <div className="swimlane-container">
      <div className="lanes">
        {Object.keys(swimlanes).map(swimlaneName => (
          <Lane key={swimlaneName} title={swimlaneName} onDropBlock={handleDropBlock}>
            {swimlanes[swimlaneName].map(block => (
              <Block
                key={block.id}
                id={block.id}
                color={block.color}
                text={block.text}
                swimlane={block.swimlane}
                onMoveBlock={onMoveBlock}
              />
            ))}
          </Lane>
        ))}
      </div>
    </div>
  );
};

export default Swimlane;
