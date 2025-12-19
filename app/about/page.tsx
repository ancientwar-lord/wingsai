export default function About() {
  return (
    <div className="bg-white dark:bg-slate-900 py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            About WingsAI
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
            Empowering the next generation of open source contributors.
          </p>
        </div>
        <div className="mt-12">
          <p className="text-gray-500 dark:text-gray-300 text-lg">
            WingsAI is an intelligent agent designed to bridge the gap between aspiring developers and complex open source projects. 
            We understand that diving into a new codebase can be daunting. That's why we've built a tool that acts as your personal mentor.
          </p>
          <p className="mt-4 text-gray-500 dark:text-gray-300 text-lg">
            Our AI analyzes repositories to provide deep insights, suggests relevant files for fixing issues, and offers hints based on 
            previously solved problems. By learning from the history of a project, WingsAI helps you understand not just <em>what</em> to fix, 
            but <em>how</em> and <em>why</em>, fostering a deeper understanding of software development.
          </p>
        </div>
      </div>
    </div>
  );
}
