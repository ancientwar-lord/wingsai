'use client';

import Link from 'next/link';
import { LeftWing } from './icons/LeftWing';
import { RightWing } from './icons/RightWing';

export default function Sidebar() {

  return (
    <div className="flex flex-col w-50 bg-gray-800 text-white h-screen fixed left-0 top-0 px-2">
      <div className="flex items-center h-16 border-b border-gray-700">
        <LeftWing className="h-6 w-auto fill-current text-indigo-500" />
        <span className="text-xl font-bold text-gray-400">WingsAI</span>
        <RightWing className="h-6 w-auto fill-current text-indigo-500" />
      </div>
      <div className="flex-1 overflow-y-auto px-4">
        <nav className="px-2 py-4 space-y-2">
          <Link
            href="/dashboard"
            className="block px-4 py-2 rounded hover:bg-gray-700"
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/projects"
            className="block px-4 py-2 rounded hover:bg-gray-700"
          >
            Projects
          </Link>
          <Link
            href="/dashboard/settings"
            className="block px-4 py-2 rounded hover:bg-gray-700"
          >
            Settings
          </Link>
          <Link
            href="/dashboard/profile"
            className="block px-4 py-2 rounded hover:bg-gray-700"
          >
            Profile
          </Link>
        </nav>
      </div>
      <div className="p-4 border-t border-gray-700">
        <button
          className="w-full px-4 py-2 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
