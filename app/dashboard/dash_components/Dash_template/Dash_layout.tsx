'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaCodeBranch } from 'react-icons/fa';
import Time_maker from '../time_maker';
import { SiGoogleclassroom } from 'react-icons/si';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen  bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 bg-white w-64 shadow-lg z-20 transform transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:static`}
      >
        <div className="p-6 border-b">
          <div className="flex">
            <div
              style={{ width: '30px', height: '30px' }}
              className="bg-green-400 text-white mx-0 my-0 rounded"
            >
              <p>NS</p>
            </div>
            <div className="text-black ms-1">
              <h1>Noor SIR</h1>
              <p className="text-gray-500">physics academy</p>
            </div>
          </div>
        </div>
        <nav className="space-y-4">
          <a
            href="/dashboard"
            className="p-0 m-0 block transition text-gray-700 hover:text-primary p-3 px-2 border-white border-4 border-l-white-600  hover:bg-green-100 hover:border-4 hover:border-l-green-600 mb-0 border-t-0"
          >
            <div className="flex flex-wrap items-center">
              <FaHome /> <span className="ms-1 text-lg">Dashboard</span>
            </div>
          </a>
          <a
            href="/dashboard/branch"
            className="p-0 m-0 block transition text-gray-700 hover:text-primary p-3 px-2 border-white border-4 border-l-white-600  hover:bg-green-100 hover:border-4 hover:border-l-green-600 mb-0 border-t-0"
          >
            <div className="flex flex-wrap items-center">
              <FaCodeBranch /> <span className="ms-1 text-lg">Branch</span>
            </div>
          </a>
          <a
            href="/dashboard/batches"
            className="p-0 m-0 block transition text-gray-700 hover:text-primary p-3 px-2 border-white border-4 border-l-white-600  hover:bg-green-100 hover:border-4 hover:border-l-green-600 mb-0 border-t-0"
          >
            <div className="flex flex-wrap items-center">
              <SiGoogleclassroom />
              <span className="ms-1 text-lg">Batches </span>
            </div>
          </a>
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="flex items-center justify-between bg-white px-4 py-3 border-b shadow-sm">
          <button
            className="lg:hidden text-xl"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div className="text-lg font-semibold text-black">Dashboard</div>
          <div className="text-lg font-semibold text-black">
            <Time_maker />
          </div>
          <div className="flex items-center gap-3">
            {/* Add user icon, logout button, etc. here */}
            <span className="text-sm text-gray-600 ">Welcome, User</span>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6 overflow-y-auto h-full bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
}
