
import Link from "next/link";

export default function Navbar() {
    return (
        <header>
            <nav className="">
                <ul className="navbar flex flex-wrap items-center justify-center gap-3 sm:gap-6 relative py-2">


                    <li className="absolute left-2 sm:left-4 md:left-[100px] flex items-center">
                        <a href="/">
                            <img
                                alt="RD"
                                className="mt-2 sm:mt-4 md:mt-[30px] w-16 h-16 sm:w-24 sm:h-24 md:w-[150px] md:h-[150px] object-contain"
                            />
                        </a>
                    </li>

                    <li><a href="/" className="text-sm sm:text-base">Inicio</a></li>
                    <li><a href="/Resume" className="text-sm sm:text-base">CV</a></li>
                    <li><a href="/Portfolio" className="text-sm sm:text-base">Portafolio</a></li>
                </ul>
            </nav>
        </header>
    );
}
