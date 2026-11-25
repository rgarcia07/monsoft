import Image from "next/image";


export default function Home() {

  return (
<<<<<<< HEAD
    <header className="Hero relative min-h-screen bg-[#080817]">
      <main className="absolute inset-0 
      bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] 
      bg-[size:45px_45px] 
      [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)] 
      main-class 
      flex flex-row 
      p-7 
      Section-head 
      w-full 
      max-w-[1040px] 
      h-auto 
      min-h-[h-300] 
      md:h-[440px] 
      mx-auto ">
        <section className=" ">
          <div>
            <div className="container-hero max-w-xl mx-auto md:mx-0">
              <p className="text-hello text-xl text-[#12D22A]">&gt;<span className="guion-p animate-blink">_</span> Bienvenido, &#128075;.</p>
=======
>>>>>>> 77b644b8d4e6c985a89f5855599ef74bea9b4d8c

    <header className="Hero w-full px-4 sm:px-6">

      <main className="
    main-class
    Section-head
    flex flex-col md:flex-row
    items-center md:items-center
    justify-between
    gap-10
    w-full max-w-[1080px]
    min-h-[300px] md:min-h-[440px]
    mx-auto
    p-5 sm:p-7 md:p-10
  ">

        {/* COLUMNA IZQUIERDA */}
        <section className="w-full md:w-3/5">

          <div className="container-hero w-full max-w-xl mx-auto md:mx-0">

            <p className="text-hello text-lg sm:text-xl text-[#12D22A]">
              &gt;<span className="animate-blink">_</span> Bienvenido. 👋
            </p>

            <div className="mt-15 md:pl-4">

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal">
                Soy{" "}
                <span className="
              nombre
              font-bold
              bg-gradient-to-r
              from-fuchsia-500
              via-violet-500
              to-blue-500
              bg-clip-text
              text-transparent
            ">
                  Ramón García
                </span>
              </h1>

            </div>

            <div className="mt-3">

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Desarrollador Web.
              </h2>

            </div>

            <div className="my-information mt-6 space-y-3 text-base sm:text-lg md:text-xl">

              <p>
                Apasionado por la tecnología, el diseño
                <br className="hidden sm:block" />
                y la creación de experiencias digitales.
              </p>

              <p>
                Abierto a aprender nuevas tecnologías y lenguajes.
              </p>

            </div>

            <div className="
          flex justify-start items-center
          flex-wrap gap-4
          py-6
        ">

              <a
                href="/Portfolio"
                className="
              inline-flex items-center justify-center
              bg-[#7c3aed]
              text-white
              font-serif text-sm
              rounded-full
              h-11 w-36
              sm:h-[45px] sm:w-[170px]
              hover:bg-violet-600
              transition-colors duration-300
            "
              >
                Explorar mi trabajo &#8594;
              </a>

            </div>

          </div>

        </section>


        {/* COLUMNA DERECHA */}
        <section className="
      w-full md:w-2/5
      flex justify-center items-center
    ">

          <h1 className="text-2xl font-bold">
          </h1>

          <img className="rotate-10 " 
            alt="Perfil-photo"
            src="/chems.png"
          />
        </section>

      </main>

    </header>


  );
}

