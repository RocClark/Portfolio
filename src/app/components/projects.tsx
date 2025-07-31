import Link from "next/link";

function Projects() {
  return (
    <div className="flex  bg-gray-50 ">
      <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
        <Link
          href="https://weather-next-sand.vercel.app"
          className="dark:bg-slate-900 bg-slate-400 my-4 p-3 rounded-lg block"
        >
          Weather App
        </Link>
      </div>
      <div className="border"></div>
      <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
        <Link
          href="#"
          className="dark:bg-slate-900 bg-slate-400 my-4 p-3 rounded-lg block"
        >
          Simple Games
        </Link>
      </div>
    </div>
  );
}

export default Projects;
