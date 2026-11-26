"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaLaravel
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiAstro,
  SiLaravel
} from "react-icons/si";

const technologies = [
  {
    name: "HTML5",
    icon: FaHtml5,
    color: "#E34F26",
    url: "https://developer.mozilla.org/es/docs/Web/HTML"
  },

  {
    name: "CSS3", icon: FaCss3Alt,
    color: "#1572B6",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },

  {
    name: "JavaScript", icon: FaJs,
    color: "#F7DF1E",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },

  {
    name: "TypeScript", icon: SiTypescript,
    color: "#3178C6",
    url: "https://www.typescriptlang.org/"
  },

  {
    name: "React", icon: FaReact,
    color: "#61DAFB",
    url: "https://react.dev/"
  },

  {
    name: "Next.js", icon: SiNextdotjs,
    color: "#FFFFFF",
    url: "https://nextjs.org/"
  },

  {
    name: "Tailwind", icon: SiTailwindcss,
    color: "#06B6D4",
    url: "https://tailwindcss.com/"
  },

  {
    name: "Astro", icon: SiAstro,
    color: "#FF5D01",
    url: "https://astro.build/"
  },

  {
    name: "Git", icon: FaGitAlt,
    color: "#F05032",
    url: "https://git-scm.com/"
  },

  {
    name: "Laravel", icon: FaLaravel,
    color: "#FF2D20",
    url: "https://laravel.com/"
  },
];


export default function Spacebar() {

  return (
    <section className="w-full overflow-hidden py-8">

      <div className="flex w-max animate-marquee">

        {[...technologies, ...technologies].map((tech, index) => {
          const Icon = tech.icon;

          return (

            <a
              key={`${tech.name}-${index}`}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`Visitar ${tech.name}`}

              className="mx-8 flex items-center gap-3
              transition-transform duration-300
              hover:scale-110"
            >
              <Icon className="text-3xl"
                style={{ color: tech.color }}
              />

              <span className="text-white text-lg font-medium">
                {tech.name}
              </span>
            </a>
          );
        })}

      </div>


    </section>
  );

}