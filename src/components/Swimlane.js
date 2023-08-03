import React from 'react';
import Lane from './Lane';
import Block from './Block';

const actors = [
  'Access Control',
  'Data Protection',
  'Secure SDLC & Security Processes',
  'Design',
  'Operations Support & Maintenance',
];

const Swimlane = ({ blocks, onMoveBlock }) => {
  const handleDropBlock = (blockId, targetSwimlane) => {
    const block = blocks.find(block => block.id === blockId);
    if (block && block.swimlane !== targetSwimlane) {
      onMoveBlock(blockId, targetSwimlane);
    }
  };

  return (
    <div className="swimlane">
      {actors.map(actor => (
        <Lane key={actor} title={actor} onDropBlock={handleDropBlock}>
          {blocks
            .filter(block => block.swimlane === actor)
            .map(block => (
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
  );
};

export default Swimlane;