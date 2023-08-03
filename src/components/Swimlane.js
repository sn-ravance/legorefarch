import React from 'react';
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

  const handleDropBlock = (blockId, targetSwimlane) => {
    const block = blocks.find(block => block.id === blockId);
    if (block && block.swimlane !== targetSwimlane) {
      onMoveBlock(blockId, targetSwimlane);
    }
  };

  return (
    <div className="swimlane-container">
      <div className="lanes-box">
        {actors.map(actor => (
          <div className="row" key={actor}>
            <div className="actors-cell">
              <div className="actor">
                {actor}
              </div>
            </div>
            <div className="lanes-cell">
              <Lane title={actor} onDropBlock={handleDropBlock}>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Swimlane;
