import React from 'react';
import './Sidebar.css';
import CrudBlock from './crudBlock';

const Sidebar = ({ expanded, onToggle, onGenerateImage, onReset, onAddBlock, onUndo, onRedo }) => {
  const handleSidebarClick = (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'BUTTON') {
      return;
    }
    onToggle();
  };

  return (
    <div className={`sidebar ${expanded ? 'expanded' : ''}`} onClick={handleSidebarClick}>
      <div className="sidebar-divider"></div>
      <CrudBlock onAddBlock={onAddBlock} className="addblock" />
      <div className="sidebar-divider"></div>
      <button className="generate-button" onClick={onGenerateImage}>
        Generate PNG
      </button>
      <div className="sidebar-divider"></div>
      <button className="undo-button" onClick={onUndo}>
        Undo
      </button>
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
