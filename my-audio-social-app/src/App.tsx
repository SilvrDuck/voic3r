import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FeedPage from './pages/FeedPage';
import ProfilePage from './pages/ProfilePage';
import './styles/main.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={FeedPage} />
          <Route path="/profile" component={ProfilePage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;