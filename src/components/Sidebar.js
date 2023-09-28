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
        
        <button className="save-button" onClick={onSaveDiagram}>
          Save Diagram
        </button>

        <button className="save-button" onClick={saveBlocksToJson}>Save to JSON</button>

        <LoadUnsaved className="load-button" onLoadDiagram={onLoadDiagram} />

        <button className="generate-button" onClick={onGenerateImage}>
          Generate PNG
        </button>

        <button className="undo-button" onClick={onUndo}>
          Undo
        </button>

        <button className="redo-button" onClick={onRedo}>
          Redo
        </button>

        <button className="reset-button" onClick={onReset}>
          Reset All
        </button>
      </div>

    </React.Fragment>
  );
};

export default Sidebar;
