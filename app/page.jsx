"use client";
import Image from "next/image";
import { developers } from "@/utils/developers";
import { projectsData } from "@/utils/projects";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [devs, setDevs] = useState([]);
  const [projects, setProjects] = useState([]);
  const [selectedDev, setSelectedDev] = useState(null);

  useEffect(() => {
    setDevs(developers);
    setProjects(projectsData);
  }, []);

  const handleSelectDev = (id) => {
    const selectedDeveloper = developers.find(
      (developer) => developer.id === id
    );
    setSelectedDev(selectedDeveloper);
  };

  const displayedProjects = selectedDev
    ? projects.filter(
        (project) =>
          project.developer.toLowerCase() === selectedDev.name.toLowerCase()
      )
    : projects;


  return (
    <main className="w-full min-h-screen">
      {/* Header  */}
      <div className="h-16 flex justify-center items-center bg-gray-100 ">
        <h1 className="text-2xl font-bold text-gray-700">
          Collaboration Team Project
        </h1>
      </div>

      {/* Profile Containers  */}
      <div className="h-28 border w-full flex justify-center items-center gap-4 py-2 shadow">
        {devs &&
          devs.map((dev) => (
            <div
              key={dev.id}
              className="h-16 w-16 rounded-full border-4 border-blue-300 cursor-pointer hover:border-blue-500 hover:scale-105 duration-200"
              onClick={() => handleSelectDev(dev.id)}
            >
              <Image
                src={dev.img}
                alt={dev.name}
                className="w-full h-full rounded-full"
              />
            </div>
          ))}
      </div>

      {/* projects Section */}
      <h1 className="text-2xl font-bold text-center my-8 text-gray-700">
       {displayedProjects.length}  Projects { selectedDev && `(${selectedDev.name})` }
      </h1>
      <div className="max-w-[1000px] mx-auto grid place-items-center gap-20 lg:gap-36 md:grid-cols-2 lg:grid-cols-3 p-5">
        {displayedProjects &&
          displayedProjects.map((project) => (
            <div key={project.id} className="h-[300px] w-[300px] text-center flex flex-col justify-center items-center gap-4">
              <div className="w-full h-full cursor-pointer hover:scale-105 duration-200">
                <Image
                  className="rounded-xl h-full w-full transform -z-10"
                  width={100}
                  height={100}
                  src={project.img}
                  alt="logo"
                />
              </div>
              <div className="space-y-4">
                <h1 className="text-xl text-gray-900 font-bold ">
                  {project.projectName}
                </h1>
                <h1 className="text-gray-700 font-bold ">
                  by: <span className="text-base">{project.developer}</span>
                </h1>
              </div>
              <div className="flex gap-4">
                <Link
                  href={project.repoUrl}
                  className="py-1 px-3 rounded-full text-sm bg-gray-700 text-white hover:scale-105 hover:text-blue-200"
                >
                  Code
                </Link>
                <Link
                  href={project.demoUrl}
                  className="py-1 px-3 rounded-full text-sm bg-purple-700 text-white hover:scale-105 hover:text-blue-200"
                >
                  Demo
                </Link>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}
