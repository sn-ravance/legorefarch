import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GitHubInteractions from './GitHubInteractions';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={GitHubInteractions} />
      </Switch>
    </Router>
  );
};

export default App;
