import Image from "next/image";

export default function Bio() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-6 py-12">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <Image
            src="/avatar.jpg" // Replace with your actual image in public/
            alt="Roscoe"
            width={200}
            height={200}
            className="rounded-full border-4 border-blue-500 shadow-lg"
          />
        </div>

        {/* Bio Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Roscoe
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Hello! I&#39;m Roscoe. I’ve been diving into web development over
            the past few years, and I&#39;m excited to transition into the tech
            industry. I enjoy learning new technologies and collaborating with
            others to expand my skills and perspectives. I&#39;m based in
            Nashua, New Hampshire, and actively looking to join a local or
            remote development team. Front-end development is where I feel most
            at home, and I’ve especially enjoyed working with frameworks like
            Tailwind CSS and Bootstrap.
          </p>
        </div>
      </div>
    </section>
  );
}
