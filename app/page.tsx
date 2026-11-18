import Image from "next/image";


export default function Home() {

  return (
    <header className="Hero">
      <main className="main-class flex flex-row p-7 Section-head w-full max-w-[1040px] h-auto min-h-[h-300] md:h-[440px] mx-auto ">
        <section className="">
          <div>
            <div className="container-hero max-w-xl mx-auto md:mx-0">
              <p className="text-hello text-3xl text-[#12D22A]">¡_ Bienvenido. &#128075;.</p>

              <div className="md:pl-10">
                <h1 className="text-4xl gradient-text">
                  Soy <span className="nombre text-4xl font-bold bg-gradient-to-r from-fuchsia-500 via-violet-500 to-blue-500 bg-clip-text text-transparent">Ramón García</span>
                </h1>
              </div>

              <div >
                <h2 className="text-4xl">Desarrollador Web.</h2>
              </div>

              <div className="my-information text-xl">
                <p>Apasionado por la tecnología, el diseño</p>
                <p>y la creación de experiencias digitales.</p>
                <p>Abierto a aprender nuevas tecnologías y lenguajes.</p>
              </div>

              <div
                className="flex justify-start items-center flex-wrap gap-4 sm:gap-5 py-5"
              >
                <a href="/Portfolio">
                  <button className="bg-[#7c3aed] text-white font-serif text-sm rounded-full cursor-pointer h-11 w-36 sm:h-[45px] sm:w-[170px] border-none"
                  >
                    Explorar mi trabajo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <h1>hi</h1>
        </section>
      </main>
    </header>

  );
}

