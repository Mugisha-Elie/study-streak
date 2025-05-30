import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/SiideBar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex flex-col h-screen">
      <Header toggleSidebar={toggleSidebar} />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar: visible on md and up; sliding on smaller screens */}
        <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

        <div className="flex flex-col flex-1 overflow-hidden">
          <MainContent className="flex-1 overflow-auto" />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
