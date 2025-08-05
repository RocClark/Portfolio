export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js"];

  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-6 py-12">
      <div className="w-full max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">
          Skills
        </h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 text-lg font-medium text-gray-700 dark:text-gray-300">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
