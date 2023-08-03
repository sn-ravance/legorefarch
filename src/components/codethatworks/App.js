import React, { useState } from 'react';
import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Swimlane from './components/Swimlane';
import Block from './components/Block';

function App() {
  const [blocks, setBlocks] = useState([
    { id: 1, color: 'lightgreen', text: 'Authentication & Password Management', swimlane: 'Access Control' },
    { id: 2, color: 'lightgreen', text: 'Authorization & User Role Management', swimlane: 'Access Control' },
    { id: 3, color: 'lightgreen', text: 'Account Management', swimlane: 'Access Control' },
    { id: 4, color: 'lightgreen', text: 'AV and Anti-Malware', swimlane: 'Data Protection' },
    { id: 5, color: 'lightgreen', text: 'Cryptography', swimlane: 'Data Protection' },
    { id: 6, color: 'lightgreen', text: 'Filesystem Security & Data Access', swimlane: 'Data Protection' },
    { id: 7, color: 'lightgreen', text: 'Secure File Transfer', swimlane: 'Data Protection' },
    { id: 8, color: 'lightgreen', text: 'Data Backups', swimlane: 'Data Protection' },
    { id: 9, color: 'lightgreen', text: 'Certificate & PKI', swimlane: 'Data Protection' },
    { id: 10, color: 'lightgreen', text: 'Application Firewall & WAF', swimlane: 'Data Protection' },
    { id: 11, color: 'lightblue', text: 'Secure Data Destruction', swimlane: 'Data Protection' },
    { id: 12, color: 'lightgreen', text: 'Anomaly Detection', swimlane: 'Data Protection' },
    { id: 13, color: 'lightgreen', text: 'Network Detection & Response', swimlane: 'Data Protection' },
    { id: 14, color: 'lightgreen', text: 'SSDLC', swimlane: 'Secure SDLC & Security Processes' },
    { id: 15, color: 'lightgreen', text: 'Secure Coding Best Practices', swimlane: 'Secure SDLC & Security Processes' },
    { id: 16, color: 'lightgreen', text: 'Pen Testing', swimlane: 'Secure SDLC & Security Processes' },
    { id: 17, color: 'lightgreen', text: 'Security Review', swimlane: 'Secure SDLC & Security Processes' },
    { id: 18, color: 'lightgreen', text: 'Threat Modeling', swimlane: 'Secure SDLC & Security Processes' },
    { id: 19, color: 'lightgreen', text: 'Security Requirements (Policy + Compliance)', swimlane: 'Secure SDLC & Security Processes' },
    { id: 20, color: 'lightgreen', text: 'Diaster Recover & Business Continuity', swimlane: 'Secure SDLC & Security Processes' },
    { id: 21, color: 'lightgreen', text: 'Non-Prod Env Mgmnt', swimlane: 'Design' },
    { id: 22, color: 'lightgreen', text: 'Configuration Management', swimlane: 'Design' },
    { id: 23, color: 'lightblue', text: 'Data Security', swimlane: 'Design' },
    { id: 24, color: 'lightgreen', text: 'End-point Security', swimlane: 'Design' },
    { id: 25, color: 'lightgreen', text: 'Secure Code', swimlane: 'Design' },
    { id: 26, color: 'lightgreen', text: 'Network Security', swimlane: 'Design' },
    { id: 27, color: 'lightgreen', text: 'Network/Micro Segmentation', swimlane: 'Design' },
    { id: 28, color: 'lightgreen', text: 'High Avai & DDoS Protection', swimlane: 'Design' },
    { id: 29, color: 'lightblue', text: 'Mobile', swimlane: 'Design' },
    { id: 30, color: 'lightgreen', text: 'Data Classification', swimlane: 'Design' },
    { id: 31, color: 'lightgreen', text: 'Remote Access', swimlane: 'Design' },
    { id: 32, color: 'lightgreen', text: 'Standard System Image (CIS Hardening)', swimlane: 'Design' },
    { id: 33, color: 'lightgreen', text: 'Services & Capability Management', swimlane: 'Operations Support & Maintenance' },
    { id: 34, color: 'lightgreen', text: 'Training & Certification', swimlane: 'Operations Support & Maintenance' },
    { id: 35, color: 'lightgreen', text: 'Metrics & Reporting', swimlane: 'Operations Support & Maintenance' },
    { id: 36, color: 'lightgreen', text: 'File Integrity Monitoring', swimlane: 'Operations Support & Maintenance' },
    { id: 37, color: 'lightgreen', text: 'Whitelisting', swimlane: 'Operations Support & Maintenance' },
    { id: 38, color: 'lightgreen', text: 'Outage Management', swimlane: 'Operations Support & Maintenance' },
    { id: 39, color: 'lightgreen', text: 'Code & Deployment Automation', swimlane: 'Operations Support & Maintenance' },
    { id: 40, color: 'lightgreen', text: 'Log & Monitoring', swimlane: 'Operations Support & Maintenance' },
    { id: 41, color: 'lightgreen', text: 'Vulnerability Management', swimlane: 'Operations Support & Maintenance' },
    { id: 42, color: 'lightgreen', text: 'Asset Management (Applications & Hardware)', swimlane: 'Operations Support & Maintenance' },
    { id: 43, color: 'lightgreen', text: 'Data Retention', swimlane: 'Operations Support & Maintenance' },
    { id: 44, color: 'lightgreen', text: 'Compliance & Audit Support', swimlane: 'Operations Support & Maintenance' },
    { id: 45, color: 'lightgreen', text: 'Automation', swimlane: 'Operations Support & Maintenance' },
    { id: 46, color: 'lightgreen', text: 'Defect Management', swimlane: 'Operations Support & Maintenance' },
    { id: 47, color: 'lightgreen', text: 'Capacity & Scalability Management', swimlane: 'Operations Support & Maintenance' },
    { id: 48, color: 'lightgreen', text: 'Patch, Software & Firmware Management', swimlane: 'Operations Support & Maintenance' },
    { id: 49, color: 'lightgreen', text: 'Intake & Offboarding Management', swimlane: 'Operations Support & Maintenance' },
    { id: 50, color: 'lightgreen', text: 'Configuration & Policy Management', swimlane: 'Operations Support & Maintenance' },
  ]);

  const handleMoveBlock = (blockId, targetSwimlane) => {
    setBlocks(prevBlocks =>
      prevBlocks.map(block =>
        block.id === blockId ? { ...block, swimlane: targetSwimlane } : block
      )
    );
  };

  return (
    <div className="App">
      <h1>Swimlane Diagram</h1>
      <DndProvider backend={HTML5Backend}>
        <Swimlane blocks={blocks} onMoveBlock={handleMoveBlock} />
        <div className="block-container">
          {blocks.map(block => (
            <Block
              key={block.id}
              id={block.id}
              color={block.color}
              text={block.text}
              swimlane={block.swimlane}
              onMoveBlock={handleMoveBlock}
            />
          ))}
        </div>
      </DndProvider>
    </div>
  );
}

export default App;