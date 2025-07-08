'use client';
import React from 'react';
import {
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
  FaBell,
  FaUser,
} from 'react-icons/fa';
import { api_url } from '../login/Login';

export default function Portal() {
  const user = {
    name: 'Rashedul Islam',
    email: 'rashedul@example.com',
    joined: 'Jan 15, 2025',
  };
  const handle_oug_out = () => {
    fetch(`${api_url}/logout`, {
      method: 'GET',
      credentials: 'include',
    }).then(async (res) => {
      const data = await res.json();
      if (data?.success == true) {
        window.location.reload();
      }
    });
  };
  return (
    <div className="min-h-screen bg-gray-100 p-6 text-black">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Welcome, {user.name} 👋</h2>
            <p className="text-sm text-gray-500">Your personal dashboard</p>
          </div>
          <div className="flex items-center gap-4 text-xl text-gray-600">
            <FaBell className="hover:text-black cursor-pointer" />
            <FaCog className="hover:text-black cursor-pointer" />

            <FaSignOutAlt
              className="hover:text-red-600 cursor-pointer"
              onClick={() => handle_oug_out()}
            />
          </div>
        </div>

        {/* Profile Card */}
        <div className="flex items-center gap-6 bg-gray-50 p-4 rounded-xl">
          <FaUserCircle className="text-blue-500 text-6xl" />
          <div>
            <h3 className="text-lg font-semibold">{user.name}</h3>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="text-xs text-gray-500">Joined: {user.joined}</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button className="flex items-center gap-2 bg-blue-100 text-blue-700 rounded-xl p-4 hover:bg-blue-200 transition">
            <FaUser /> Change Password
          </button>
        </div>

        {/* Recent Activity */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Orders</h4>
          <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
            <li>Logged in from a new device</li>
            <li>Updated profile picture</li>
            <li>Completed onboarding checklist</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
