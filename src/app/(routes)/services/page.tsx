import AvatarServices from "@/components/AvatarService";
import CircleImage from "@/components/CircleImage";
import TransitionPage from "@/components/TransitionPage";
import SliderServices from "@/components/SliderServices";

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarServices />
      <div className="py-36 grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 lg:pl-16">
        <div className="max-w-[450px] mx-auto">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
            Mis <span className="font-bold text-secondary"> servicios.</span>
          </h1>
          <p className="mb-5 text-xl text-gray-300 text-center md:text-left">
            Creo aplicaciones web de alto rendimiento utilizando
            <span className="font-semibold text-white"> Vue.js </span> y
            <span className="font-semibold text-white"> React </span> con
            <span className="font-semibold text-white"> Tailwind CSS</span>. Me
            especializo en diseñar interfaces intuitivas que se integran con
            backends robustos en
            <span className="font-semibold text-white"> Node.js </span> y
            soluciones
            <span className="font-semibold text-white">
              {" "}
              Serverless con Firebase
            </span>
            , asegurando escalabilidad y una experiencia de usuario fluida.
          </p>

          <div className="text-center">
            <a href="mailto:chechemontoya1997@gmail.com?subject=Consulta&body=Hola,%20me%20gustaría%20contactarte.">
              <button className="px-4 py-2 text-base sm:text-lg font-semibold text-white rounded-lg bg-secondary hover:bg-secondary/80 transition-transform transform hover:scale-105">
                Contacta conmigo
              </button>
            </a>
          </div>
        </div>

        <div>
          <SliderServices />
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
