import React from "react";

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <>
      {/* Overlay, visible only when sidebar is open on small screens */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden transition-opacity ${
          sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSidebar}
      ></div>

      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4 flex flex-col
          transform transition-transform z-40
          md:relative md:translate-x-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Sidebar content */}
        <ul className="space-y-4 flex-1">
          <li>
            <a href="#" className="block p-2 hover:bg-gray-700 rounded">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 hover:bg-gray-700 rounded">
              Upload Files
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 hover:bg-gray-700 rounded">
              Study Files
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 hover:bg-gray-700 rounded">
              Progress
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 hover:bg-gray-700 rounded">
              Daily Motivation
            </a>
          </li>
        </ul>

        {/* Bottom button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded mt-5">
          Sign In / Login
        </button>
      </aside>
    </>
  );
};

export default Sidebar;
