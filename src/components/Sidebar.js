import React from 'react';
import './Sidebar.css';
import CrudBlock from './crudBlock';
import LoadUnsaved from './LoadUnsaved';

const Sidebar = ({ expanded, onToggle, onGenerateImage, onReset, onAddBlock, onUndo, onRedo, onSaveDiagram, onLoadDiagram }) => {
  const handleSidebarClick = (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'BUTTON') {
      return;
    }
    onToggle();
  };

  const handleLoadButtonClick = (e) => {
    e.stopPropagation();
    onLoadDiagram(); // Call the onLoadDiagram function without passing the event object
  };

  return (
    <div className={`sidebar ${expanded ? 'expanded' : ''}`} onClick={handleSidebarClick}>
      <div className="sidebar-divider"></div>
 
      <CrudBlock onAddBlock={onAddBlock} className="add-button" />

      <div className="sidebar-divider"></div>

      <button className="save-button" onClick={onSaveDiagram}>
        Save Diagram
      </button>

      <div className="sidebar-divider"></div>

      <LoadUnsaved className="load-button" onLoadDiagram={onLoadDiagram} />

      <div className="sidebar-divider"></div>

      <button className="generate-button" onClick={onGenerateImage}>
        Generate PNG
      </button>

      <div className="sidebar-divider"></div>

      <button className="undo-button" onClick={onUndo}>
        Undo
      </button>

      <div className="sidebar-divider"></div>

      <button className="redo-button" onClick={onRedo}>
        Redo
      </button>

      <div className="sidebar-divider"></div>

      <button className="reset-button" onClick={onReset}>
        Reset All
      </button>
    </div>
  );
};

export default Sidebar;
