"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiAstro,
} from "react-icons/si";

const technologies = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Astro", icon: SiAstro },
  { name: "Git", icon: FaGitAlt },
];


export default function Spacebar(){

    return(
    <section className="w-full overflow-hidden py-8">

      <div className="flex w-max animate-marquee">

        {[...technologies, ...technologies].map((tech, index) => {
          const Icon = tech.icon;

          return (
            <div
              key={index}
              className="flex items-center gap-3 mx-8"
            >
              <Icon className="text-3xl text-white" />

              <span className="text-white text-lg font-medium">
                {tech.name}
              </span>
            </div>
          );
        })}

      </div>

    </section>
  );
    
}