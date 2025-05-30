import React from 'react';
import profileImage from '../assets/profileIcon.png';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-blue-600 text-white p-4 flex items-center shadow-md">
      {/* Hamburger button for small screens */}
      <button
        onClick={toggleSidebar}
        className="sm:hidden mr-4 p-2 rounded hover:bg-blue-500"
        aria-label="Toggle sidebar"
      >
        {/* Simple hamburger icon (3 bars) */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      {/* Left: Title and Streak */}
      <div className="flex-1 flex items-center gap-4">
        <h1 className="text-xl font-bold">StudyStreak</h1>
        <div className="flex items-center gap-1 text-sm font-semibold">
          <span role="img" aria-label="fire">
            🔥
          </span>
          <span>Streak: {/* You can put streak value here later */}</span>
        </div>
      </div>

      {/* Center: Nav */}
      <nav className="flex-1 hidden sm:flex justify-center">
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Profile
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              About
            </a>
          </li>
        </ul>
      </nav>

      {/* Right: User Info */}
      <div className="flex-1 flex justify-end items-center gap-2">
        <span className="text-sm">Profile</span>
        <img
          src={profileImage}
          alt="Default profile"
          className="rounded-full w-8 h-8 object-cover"
        />
      </div>
    </header>
  );
};

export default Header;
