export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-6 py-12">
      <div className="w-full max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">
          Contact
        </h2>
        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300">
          <div>
            <p className="font-semibold">Email:</p>
            <a
              href="mailto:roscoe@example.com"
              className="text-blue-600 hover:underline"
            >
              roscoe@example.com
            </a>
          </div>

          <div>
            <p className="font-semibold">GitHub:</p>
            <a
              href="https://github.com/roscoeclark"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              github.com/roscoeclark
            </a>
          </div>

          <div>
            <p className="font-semibold">LinkedIn:</p>
            <a
              href="https://www.linkedin.com/in/roscoeclark"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              linkedin.com/in/roscoeclark
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
