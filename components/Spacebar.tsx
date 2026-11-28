import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiLaravel } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev", hoverColor: "#61dafb" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org", hoverColor: "#3178c6" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com", hoverColor: "#38bdf8" },
];

const techLogos2 = [

  { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com/", hoverColor: "#F05340" },

];



export default function Spacebar() {
  return (
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
      <LogoLoop
        logos={techLogos}
        speed={40}
        direction="left"
        logoHeight={44}
        gap={56}
        hoverSpeed={0}
        scaleOnHover={false}
        ariaLabel="Technology partners"
        layout="line"
        bend={0.5}
        magnify={0}
        labels="inline"
        muted={0}
      />
      <LogoLoop
        logos={techLogos2}
        speed={40}
        direction="right"
        logoHeight={44}
        gap={56}
        hoverSpeed={0}
        scaleOnHover={false}
        ariaLabel="Technology partners"
        layout="line"
        bend={0.5}
        magnify={0}
        labels="inline"
        muted={0}
      />
      
    </div>
    
  );
}