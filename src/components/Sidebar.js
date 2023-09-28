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
        <div className="sidebar-header">
          <button className="title-button">
            RefArch Diagram Generator
          </button>
        </div>
        <div className="sidebar-body">
          <AddBlockPopup className="add-button" onAddBlock={onAddBlock} />

          <button className="save-button" onClick={onSaveDiagram}>
            Save Diagram
          </button>

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
        </div>
        <div className="sidebar-footer">
          <button className="reset-button" onClick={onReset}>Reset All</button>
        </div>i
       
      </div>

    </React.Fragment>
  );
};

export default Sidebar;
