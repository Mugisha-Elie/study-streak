import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-3">
      <p>&copy; {new Date().getFullYear()} StudyStreak. All rights reserved.</p>
    </footer>
  );
};

export default Footer;