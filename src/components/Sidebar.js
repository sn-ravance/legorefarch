import React from 'react';
import './Sidebar.css';
import CrudBlock from './crudBlock';

const Sidebar = ({ expanded, onToggle, onGenerateImage, onReset, onAddBlock }) => {
  const handleSidebarClick = (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'BUTTON') {
      return;
    }
    onToggle();
  };

  return (
    <div className={`sidebar ${expanded ? 'expanded' : ''}`} onClick={handleSidebarClick}>
      <CrudBlock onAddBlock={onAddBlock} className="addblock"/>
      <button className="generate-button" onClick={onGenerateImage}>
        Generate PNG
      </button>
      <button className="reset-button" onClick={onReset}>
        Reset All
      </button>
    </div>
  );
};

export default Sidebar;
