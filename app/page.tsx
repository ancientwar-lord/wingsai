import Link from 'next/link';

export default function Home() {
  const personas = [
    {
      title: 'The Aspiring Contributor',
      tag: 'Build Your Portfolio',
      description:
        'Break through the "imposter syndrome" barrier. Understand complex codebases instantly, find good first issues, and make contributions that get merged.',
      icon: (
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      title: 'The Career Switcher',
      tag: 'Fast-Track Learning',
      description:
        "Don't just watch tutorials—work on real software. WingsAI acts as your senior pair programmer, explaining architectural decisions and industry standards as you code.",
      icon: (
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: 'The Efficient Pro',
      tag: 'Save Valuable Time',
      description:
        'Skip the tedious onboarding setup. Get a high-level overview of new repositories in seconds and focus your mental energy on solving logic, not tracing imports.',
      icon: (
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 relative isolate overflow-hidden min-h-screen">
      {/* --- Background Wings Layer --- */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Top Right Wing */}
        <svg
          className="absolute top-10 right-10 w-120 md:w-160 lg:w-200 h-auto text-indigo-50 dark:text-indigo-900/20 opacity-60 scale-x-[-1]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="213 249.61 312.67 225.34"
          fill="currentColor"
        >
          <path d="M213 249.7c0 1.7 7.4 15.1 11.8 21.3 6.5 9.3 22.2 25 32.7 32.9 24.6 18.5 62.4 36.9 106.9 52 8.2 2.8 15.4 5.1 16 5.1s-4.3-2.9-10.9-6.4c-21.1-11.2-41.3-23.4-68.1-41.2-14.3-9.5-26.6-17.9-27.2-18.7-1.2-1.4 5.8.5 56.3 14.8 10.4 2.9 19.1 5.2 19.3 5.1.3-.4-25.3-11.3-58.5-25-36.9-15.2-54.9-24.2-72-36.4-3.5-2.4-6.3-4-6.3-3.5m37.1 75c14.1 25.3 36.3 44.2 72.4 61.8 19.4 9.5 33.7 15.2 54.5 21.9 16.8 5.4 44 13 44.5 12.4.2-.2-2.6-1.7-6.3-3.3-10.9-4.6-46.7-22.6-60.7-30.5-15-8.4-44.5-26-44.5-26.4s41.2 8 62.5 12.8c8.3 1.9 15.1 3.3 15.3 3.1.4-.4-12.1-4.8-55.3-19.5-37.7-12.9-65-24.7-79.4-34.4-2.9-2-5.5-3.6-5.8-3.6-.2 0 1 2.6 2.8 5.7m134.9 7.8c0 2 8.7 12.8 12.7 15.8 5.6 4 18 10.4 29 14.8 9.3 3.8 33.3 11.9 34.8 11.9.5-.1-3.7-2-9.5-4.4-13.2-5.4-23.9-10.8-31-15.6-5.5-3.8-12.1-10-10.6-10 1.1 0 25.3 2.9 29.6 3.5 10.8 1.6-12.6-6.1-35-11.6-9.1-2.2-17.3-4.3-18.2-4.5-1-.3-1.8-.3-1.8.1m25.9 53.8c6.8 9.9 18.4 16.9 40.1 24.1 11.4 3.8 37.2 10.8 37.7 10.2.2-.2-5.2-2.2-11.9-4.5-20-6.8-41.8-18.4-41.8-22.3 0-.5 1.2-.7 2.8-.4 4.2.8 29.8 1.9 29.2 1.2-1.6-1.6-52.3-12.6-58.2-12.6-.5 0 .4 1.9 2.1 4.3M290 399.6c0 1.5 10.7 13.9 17.3 20 28.1 26 76.1 43.4 146.1 52.9 16.6 2.2 28.8 3.2 23.1 1.8-17.2-4.2-58.1-18.4-87-30.1-26.1-10.6-30.5-12.5-30.1-13 .3-.2 17.3.8 38 2.3s38.1 2.5 38.7 2.3c.5-.2-12.4-3-28.8-6.2-55.2-10.8-63.4-12.5-77-16.1s-29.5-9.1-36.5-12.6c-2.1-1.1-3.8-1.7-3.8-1.3M451 443c2.5 2.9 6.5 6.6 8.9 8.2 9 5.6 25.9 11 49.6 15.7 17.2 3.3 21.2 3.4 9.5.2-21.4-5.9-35.3-11.7-42.5-17.6l-3-2.4 17-.1c9.8 0 16.4-.4 15.5-.9-3.1-1.8-33.7-6.5-50.1-7.7l-9.4-.7z" />
        </svg>
        {/* Bottom Left Wing */}
        <svg
          className="absolute bottom-40 left-0 rotate-95 w-120 md:w-160 lg:w-200 h-auto text-indigo-50 dark:text-indigo-900/20 opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="213 249.61 312.67 225.34"
          fill="currentColor"
        >
          <path d="M213 249.7c0 1.7 7.4 15.1 11.8 21.3 6.5 9.3 22.2 25 32.7 32.9 24.6 18.5 62.4 36.9 106.9 52 8.2 2.8 15.4 5.1 16 5.1s-4.3-2.9-10.9-6.4c-21.1-11.2-41.3-23.4-68.1-41.2-14.3-9.5-26.6-17.9-27.2-18.7-1.2-1.4 5.8.5 56.3 14.8 10.4 2.9 19.1 5.2 19.3 5.1.3-.4-25.3-11.3-58.5-25-36.9-15.2-54.9-24.2-72-36.4-3.5-2.4-6.3-4-6.3-3.5m37.1 75c14.1 25.3 36.3 44.2 72.4 61.8 19.4 9.5 33.7 15.2 54.5 21.9 16.8 5.4 44 13 44.5 12.4.2-.2-2.6-1.7-6.3-3.3-10.9-4.6-46.7-22.6-60.7-30.5-15-8.4-44.5-26-44.5-26.4s41.2 8 62.5 12.8c8.3 1.9 15.1 3.3 15.3 3.1.4-.4-12.1-4.8-55.3-19.5-37.7-12.9-65-24.7-79.4-34.4-2.9-2-5.5-3.6-5.8-3.6-.2 0 1 2.6 2.8 5.7m134.9 7.8c0 2 8.7 12.8 12.7 15.8 5.6 4 18 10.4 29 14.8 9.3 3.8 33.3 11.9 34.8 11.9.5-.1-3.7-2-9.5-4.4-13.2-5.4-23.9-10.8-31-15.6-5.5-3.8-12.1-10-10.6-10 1.1 0 25.3 2.9 29.6 3.5 10.8 1.6-12.6-6.1-35-11.6-9.1-2.2-17.3-4.3-18.2-4.5-1-.3-1.8-.3-1.8.1m25.9 53.8c6.8 9.9 18.4 16.9 40.1 24.1 11.4 3.8 37.2 10.8 37.7 10.2.2-.2-5.2-2.2-11.9-4.5-20-6.8-41.8-18.4-41.8-22.3 0-.5 1.2-.7 2.8-.4 4.2.8 29.8 1.9 29.2 1.2-1.6-1.6-52.3-12.6-58.2-12.6-.5 0 .4 1.9 2.1 4.3M290 399.6c0 1.5 10.7 13.9 17.3 20 28.1 26 76.1 43.4 146.1 52.9 16.6 2.2 28.8 3.2 23.1 1.8-17.2-4.2-58.1-18.4-87-30.1-26.1-10.6-30.5-12.5-30.1-13 .3-.2 17.3.8 38 2.3s38.1 2.5 38.7 2.3c.5-.2-12.4-3-28.8-6.2-55.2-10.8-63.4-12.5-77-16.1s-29.5-9.1-36.5-12.6c-2.1-1.1-3.8-1.7-3.8-1.3M451 443c2.5 2.9 6.5 6.6 8.9 8.2 9 5.6 25.9 11 49.6 15.7 17.2 3.3 21.2 3.4 9.5.2-21.4-5.9-35.3-11.7-42.5-17.6l-3-2.4 17-.1c9.8 0 16.4-.4 15.5-.9-3.1-1.8-33.7-6.5-50.1-7.7l-9.4-.7z" />
        </svg>
      </div>

      {/* --- Main Hero Content --- */}
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white/50 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Your AI Companion for</span>{' '}
                <span className="block text-indigo-600 dark:text-indigo-400 xl:inline">
                  Open Source Contribution
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm p-2 rounded-lg inline-block">
                WingsAI reviews codebases, analyzes issues, and guides you to
                the solution. Learn from the past, solve the present, and build
                the future of open source and give wings to your open source and
                coding journey.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    href="/signup"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Start Contributing
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    href="/about"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* --- New "Who is this for?" Section --- */}
      <div className="py-3 bg-transparent">
        <div className="max-w-7xl mx-auto pb-20 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white/50 sm:text-4xl">
              Gain an Edge in a Fast-Evolving Industry
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm p-2 rounded-lg">
              Whether you are just starting or leading the team, WingsAI
              accelerates your workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {personas.map((persona, index) => (
              <div
                key={index}
                className="relative group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700 hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  {/* Decorative background icon effect */}
                  <div className="text-indigo-600 dark:text-indigo-400 transform scale-150">
                    {persona.icon}
                  </div>
                </div>

                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-600 text-white mb-6 shadow-lg shadow-indigo-600/20">
                  {persona.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {persona.title}
                </h3>
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-300 uppercase bg-indigo-50 dark:bg-indigo-900/30 rounded-full">
                  {persona.tag}
                </span>
                <p className="text-gray-500 dark:text-gray-300 leading-relaxed">
                  {persona.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
