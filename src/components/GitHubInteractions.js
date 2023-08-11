import React, { useState, useEffect } from 'react';

const GitHubInteractions = () => {
  const [repositories, setRepositories] = useState([]);
  const [token, setToken] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    // Fetch user's repositories using GitHub API
    const fetchRepositories = async () => {
      if (token) {
        try {
          const response = await fetch('https://api.github.com/users/sealmindset/repos', {
            headers: {
              Authorization: `token ${token}`,
            },
          });
          if (response.ok) {
            const data = await response.json();
            setRepositories(data);
          } else {
            console.error('Error fetching repositories:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching repositories:', error);
        }
      }
    };

    fetchRepositories();
  }, [token]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (token && selectedFile) {
      try {
        const formData = new FormData();
        formData.append('file', selectedFile);
  
        const reader = new FileReader();
        reader.onload = async (event) => {
          const fileContent = event.target.result.split(',')[1]; // Get base64 content
          try {
            const response = await fetch('https://api.github.com/repos/sealmindset/arbrepo/contents/SecureIoT/', {
              method: 'PUT',
              headers: {
                Authorization: `token ${token}`,
                'Content-Type': 'application/vnd.github.v3+json',
              },
              body: JSON.stringify({
                message: 'Upload PNG file',
                content: fileContent,
              }),
            });
  
            if (response.ok) {
              console.log('File uploaded successfully');
            } else {
              console.error('Error uploading file:', response.statusText);
            }
          } catch (error) {
            console.error('Error uploading file:', error);
          }
        };
  
        reader.readAsDataURL(selectedFile); // Read and convert to base64
      } catch (error) {
        console.error('Error preparing file upload:', error);
      }
    }
  };
  

  return (
    <div>
      <h2>Your GitHub Repositories</h2>
      {token ? (
        <div>
          <p>Personal Access Token is set.</p>
          <ul>
            {repositories.map((repo) => (
              <li key={repo.id}>{repo.name}</li>
            ))}
          </ul>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUpload}>Upload PNG</button>
        </div>
      ) : (
        <div>
          <p>Set your Personal Access Token to view repositories.</p>
          <input
            type="text"
            placeholder="Enter your Personal Access Token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};

export default GitHubInteractions;
