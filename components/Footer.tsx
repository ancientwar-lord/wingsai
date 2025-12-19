'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LeftWing } from './icons/LeftWing';
import { RightWing } from './icons/RightWing';

export default function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith('/dashboard')) {
    return null;
  }

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800">
      <div className="flex flex-col items-center justify-center m-4 border-gray-200 dark:border-slate-800">
        <Link href="/" className="flex  items-center mb-4">
          {/* Logo SVG */}
          <LeftWing className="h-6 w-auto fill-current text-indigo-500" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            WingsAI
          </span>
          <RightWing className="h-6 w-auto fill-current text-indigo-500" />
        </Link>
        <p className="text-sm text-gray-400 dark:text-gray-500">
          &copy; {new Date().getFullYear()} WingsAI, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
