import Link from "next/link";

export default function Projects() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-6 py-12">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Weather App */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
              Weather App
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A weather forecasting app built with Next.js and external APIs.
            </p>
            <Link
              href="https://weather-next-sand.vercel.app"
              target="_blank"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              View Project
            </Link>
          </div>

          {/* Simple Games */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
              Simple Games
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A collection of fun games like Hangman, Typing Test, and Breakout.
            </p>
            <Link
              href="#"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              View Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
