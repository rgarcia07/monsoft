
import Image from "next/image";

export default function navBar() {
    

    
    return (
        <header className="mx-10 my-10">
            <nav className="navBar-hero h-16 w-full max-w-[1200px] mx-auto rounded-full border border-[#1D182B] bg-[#0B0713] flex items-center justify-between px-7">                
                <div className="flex items-center">
                <a href="/">
                    <img
                        src="/perfil.png"
                        alt="Logo"
                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
                    />
                </a>
            </div>
                <ul className="navbar flex items-center gap-4 sm:gap-8 md:gap-10">
                    <li><a href="/" className="text-sm sm:text-base">Inicio</a></li>
                    <li><a href="/Resume" className="text-sm sm:text-base">CV</a></li>
                    <li><a href="/Portfolio" className="text-sm sm:text-base">Portafolio</a></li>
                    
                </ul>

            </nav>
        </header>

    );
}
