import React from 'react';
import './Sidebar.css';

const Sidebar = ({ expanded, onToggle, onGenerateImage, onReset }) => {
  const handleSidebarClick = (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'BUTTON') {
      // Prevent expansion if the clicked element is an input, select, or button
      return;
    }
    onToggle();
  };

  return (
    <div className={`sidebar ${expanded ? 'expanded' : ''}`} onClick={handleSidebarClick}>
      <button className="generate-button" onClick={onGenerateImage}>
        Generate PNG
      </button>
      <button className="reset-button" onClick={onReset}>
        Reset
      </button>
    </div>
  );
};

export default Sidebar;
