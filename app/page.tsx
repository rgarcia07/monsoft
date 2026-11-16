import Image from "next/image";

 
export default function Home() {

  return (
    <header className="Hero">
      <main className="main-class">
        <section className="Section-head">
          <div>
            <div className="container-hero max-w-xl mx-auto md:mx-0">
              <p className="text-hello">¡Hola! &#128075;.</p>

              <div className="md:pl-10">
                <h1>
                  Soy <span className="nombre">Ramón García</span>
                </h1>
              </div>

              <div>
                <h2>Diseño y construyo interfaces.</h2>
              </div>

              <div className="my-information">
                <p>Begginer Web Developer</p>
                <p>Graduado en Ingeniería en Sistemas C.</p>
                <p>Abierto a aprender nuevas tecnologías y lenguajes.</p>
              </div>

              <div
                className="flex justify-start items-center flex-wrap gap-4 sm:gap-5 py-5"
              >
                <a href="/Portfolio">
                  <button className="bg-[#7c3aed] text-white font-sans text-sm rounded-full cursor-pointer h-11 w-36 sm:h-[45px] sm:w-[170px] border-none"
                  >
                    Ver mi portafolio
                  </button>
                </a>

                <a href="#Contact">
                  <button id="btn-write"
                    className="bg-[#7c3aed] text-white font-sans text-sm rounded-full cursor-pointer h-11 w-36 sm:h-[45px] sm:w-[170px] border-none"
                  >
                    Escríbeme
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </header>

  );
}

