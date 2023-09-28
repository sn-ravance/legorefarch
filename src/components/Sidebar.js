import React from 'react';
import './Sidebar.css';
import LoadUnsaved from './LoadUnsaved';
import AddBlockPopup from './AddBlockPopup';

const Sidebar = ({ expanded, onToggle, onGenerateImage, onReset, onAddBlock, onUndo, onRedo, onSaveDiagram, onLoadDiagram, saveBlocksToJson }) => {
  const handleSidebarClick = (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'BUTTON') {
      return;
    }
    onToggle();
  };

  return (
    <React.Fragment>
      <div className={`sidebar ${expanded ? 'expanded' : ''}`} onClick={handleSidebarClick}>
        
        <AddBlockPopup className="add-button" onAddBlock={onAddBlock} />
        {/* Add this line */} 
        <button className="save-button" onClick={onSaveDiagram}>
          Save Diagram
        </button>
        {/* Add this line */}
        <LoadUnsaved className="load-button" onLoadDiagram={onLoadDiagram} />
        {/* Add this line */}
        <button className="generate-button" onClick={onGenerateImage}>
          Generate PNG
        </button>
        {/* Add this line */}
        <button className="undo-button" onClick={onUndo}>
          Undo
        </button>
        {/* Add this line */}
        <button className="redo-button" onClick={onRedo}>
          Redo
        </button>
        {/* Add this line */}
        <button className="reset-button" onClick={onReset}>
          Reset All
        </button>
      </div>

    </React.Fragment>
  );
};

export default Sidebar;
