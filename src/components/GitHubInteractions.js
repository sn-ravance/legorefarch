import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GitHubInteractions = () => {
  const [repositoryData, setRepositoryData] = useState(null);

  useEffect(() => {
    const fetchRepositoryData = async () => {
      try {
        const authToken = process.env.REACT_APP_GITHUB_TOKEN;
        const response = await axios.get('https://api.github.com/repos/sealmindset/arbrepo', {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        setRepositoryData(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchRepositoryData();
  }, []);

  return (
    <div>
      <h2>GitHub Interactions</h2>
      {repositoryData ? (
        <div>
          <p>Repository Name: {repositoryData.name}</p>
          <p>Repository Description: {repositoryData.description}</p>
          {/* Display other repository information */}
        </div>
      ) : (
        <p>Loading repository data...</p>
      )}
    </div>
  );
};

export default GitHubInteractions;
