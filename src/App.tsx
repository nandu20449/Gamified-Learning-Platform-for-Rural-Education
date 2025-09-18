import React, { useState } from 'react';
import Homepage from './components/Homepage';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Rewards from './components/Rewards';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Homepage onNavigate={handleNavigation} />;
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigation} />;
      case 'profile':
        return <Profile onNavigate={handleNavigation} />;
      case 'rewards':
        return <Rewards onNavigate={handleNavigation} />;
      default:
        return <Homepage onNavigate={handleNavigation} />;
    }
  };

  return <div className="App">{renderPage()}</div>;
}

export default App;