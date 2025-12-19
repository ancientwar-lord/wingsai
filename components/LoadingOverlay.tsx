'use client';

import { LeftWing } from './icons/LeftWing';
import { RightWing } from './icons/RightWing';

export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/10 backdrop-blur-sm">
      <div className="relative items-center">
        <div className=" flex">
          <LeftWing className="h-20 w-auto fill-current text-indigo-600 dark:text-indigo-400 animate-ping" />
          <span className="mt-4 text-white/50 text-xl font-semibold">
            {' '}
            Loading...
          </span>
          <RightWing className="h-20 w-auto fill-current text-indigo-600 dark:text-indigo-400 animate-ping" />
        </div>
      </div>
    </div>
  );
}
