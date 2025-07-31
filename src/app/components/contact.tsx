function Body() {
  return (
    <div className="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out">
      <div className="text-center px-14">
        <h2 className="text-gray-800 text-3xl font-bold">Skills</h2>
        <ul className="text-gray-400 mt-2 hover:text-blue-500">
          <li>Email</li>
          <p className="mt-2 text-gray-500 text-sm">
            You can reach me at my email:{" "}
            <a href="mailto:roscoe@example.com">roscoe@example.com</a>
          </p>
          <li>GitHub</li>
          <p className="mt-2 text-gray-500 text-sm">
            Check out my projects on{" "}
            <a
              href="https://github.com/roscoeclark"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
          <li>LinkedIn</li>
          <p className="mt-2 text-gray-500 text-sm">
            Connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/roscoeclark"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </ul>
      </div>
    </div>
  );
}

export default Body;
