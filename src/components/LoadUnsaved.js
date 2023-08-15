import React, { useRef } from 'react';

const LoadUnsaved = ({ onLoadDiagram }) => {
  const fileInputRef = useRef(null); // Create a ref for the file input element

  const handleLoadClick = () => {
    // Use the ref to access the file input element
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger a click event on the hidden file input
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Access the selected file
    if (file) {
      onLoadDiagram(event); // Pass the event object to the onLoadDiagram function
    }
  };

  return (
    <div className="load-unsaved">
      <button className="load-button" onClick={handleLoadClick}>
        Load Diagram
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        onChange={handleFileChange}
        style={{ display: 'none' }} // Hide the input element
      />
    </div>
  );
};

export default LoadUnsaved;
