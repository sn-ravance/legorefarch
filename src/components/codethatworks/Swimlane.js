import React, { useState } from 'react';
import Lane from './Lane';
import Block from './Block';

const Swimlane = ({ blocks, onMoveBlock }) => {
  const actors = [
    'Access Control',
    'Data Protection',
    'Secure SDLC & Security Processes',
    'Design',
    'Operations Support & Maintenance',
  ];

  // Initialize block colors using initialBlocks
  const initialBlockColors = blocks.reduce((acc, block) => {
    acc[block.id] = block.color;
    return acc;
  }, {});

  const [blockColors, setBlockColors] = useState(initialBlockColors);

  const handleDropBlock = (blockId, targetSwimlane) => {
    const block = blocks.find(block => block.id === blockId);
    if (block && block.swimlane !== targetSwimlane) {
      onMoveBlock(blockId, targetSwimlane);
    }
  };

  const handleResetColors = (swimlaneTitle) => {
    const updatedBlocks = blocks.map(block => {
      if (block.swimlane === swimlaneTitle) {
        return { ...block, color: blockColors[block.id] || block.color };
      }
      return block;
    });
    
    const updatedBlockColors = { ...blockColors };
    for (const block of updatedBlocks) {
      updatedBlockColors[block.id] = block.color;
    }
    setBlockColors(updatedBlockColors);
  };

  return (
    <div className="swimlane-container">
      <div className="lanes-box">
        {actors.map(actor => (
          <div className="lanes-cell" key={actor}>
            <Lane
              title={actor}
              onDropBlock={handleDropBlock}
              onResetColors={handleResetColors}
            >
              {blocks
                .filter(block => block.swimlane === actor)
                .map(block => (
                  <Block
                    key={block.id}
                    id={block.id}
                    color={block.color}
                    text={block.text}
                    onMoveBlock={onMoveBlock}
                  />
                ))}
            </Lane>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Swimlane;
