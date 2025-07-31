import React from "react";
import Bio from "./components/bio";
import Header from "./components/header";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";

export default function about() {
  return (
    <div className="h-screen bg-gray-200  dark:bg-gray-800   flex flex-wrap items-center  justify-center  ">
      <Header />
      <Bio />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
