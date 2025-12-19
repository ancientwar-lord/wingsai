'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LeftWing } from './icons/LeftWing';
import { RightWing } from './icons/RightWing';

export default function Navbar() {
  const pathname = usePathname();

  if (pathname.startsWith('/dashboard')) {
    return null;
  }

  return (
    <nav className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex shrink-0 items-center">
            <Link
              href="/"
              className="flex items-center text-xl font-semibold text-indigo-600 dark:text-white/40"
            >
              <LeftWing className="h-8 w-auto fill-current" />
              <span className="text-indigo-800 dark:text-indigo-400">
                WingsAI
              </span>
              <RightWing className="h-8 w-auto fill-current" />
            </Link>
          </div>

          <div className="hidden sm:flex sm:space-x-12 absolute left-1/2 transform -translate-x-1/2">
            <Link
              href="/"
              className="border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-lg font-serif font-semibold"
            >
              Home
            </Link>
            <Link
              href="/features"
              className="border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-lg font-serif font-semibold"
            >
              Features
            </Link>
            <Link
              href="/about"
              className="border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 hover:text-gray-700 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-lg font-serif font-semibold"
            >
              About
            </Link>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link
              href="/"
              className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-semibold"
            >
              Log in
            </Link>
            <Link
              href="/"
              className="bg-indigo-600 text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-semibold"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
