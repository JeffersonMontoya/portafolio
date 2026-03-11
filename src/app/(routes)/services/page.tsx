import ContainerPage from "@/components/Container";
import TransitionPage from "@/components/TransitionPage";
import SliderServices from "@/components/SliderServices";

const ServicesPage = () => {
  return (
    <ContainerPage>
      <TransitionPage />
      <div className="flex flex-col justify-center min-h-[60vh]">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl leading-tight md:text-5xl font-bold mb-4">
            Mis <span className="text-secondary">servicios.</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Creo aplicaciones web de alto rendimiento utilizando
            <span className="font-semibold text-white/90"> Vue.js </span>y
            <span className="font-semibold text-white/90"> React </span>con
            <span className="font-semibold text-white/90"> Tailwind CSS</span>.
            Me especializo en diseñar interfaces intuitivas que se integran con
            backends robustos en
            <span className="font-semibold text-white/90"> Node.js </span>y
            soluciones
            <span className="font-semibold text-white/90">
              {" "}Serverless con Firebase
            </span>
            , asegurando escalabilidad y una experiencia de usuario fluida.
          </p>
        </div>

        {/* Services Grid */}
        <div className="w-full max-w-5xl mx-auto mb-10">
          <SliderServices />
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="mailto:chechemontoya1997@gmail.com?subject=Consulta&body=Hola,%20me%20gustaría%20contactarte.">
            <button className="px-8 py-3 text-sm font-bold text-white rounded-xl bg-secondary hover:bg-secondary/80 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/25 hover:scale-[1.02] active:scale-[0.98]">
              Contacta conmigo
            </button>
          </a>
        </div>
      </div>
    </ContainerPage>
  );
};

export default ServicesPage;
