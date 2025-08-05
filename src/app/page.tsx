import React from "react";
import Bio from "./components/bio";
import Header from "./components/header";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main className="bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-white w-full min-h-screen">
      <Header />

      <section className="min-h-screen flex items-center justify-center">
        <Bio />
      </section>

      <section className="min-h-screen flex items-center justify-center">
        <Projects />
      </section>

      <section className="min-h-screen flex items-center justify-center">
        <Skills />
      </section>

      <section className="min-h-screen flex items-center justify-center">
        <Contact />
      </section>
    </main>
  );
}
