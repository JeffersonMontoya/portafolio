import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div className="w-full min-h-screen bg-darkBg/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 py-8 sm:py-12 lg:py-16">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start py-10 ">
            <div className="relative w-full max-w-[280px] sm:pt-3 max-sm:pt-8 sm:max-w-[320px] md:max-w-[380px] lg:max-w-[400px]">
              <Image
                src="/home-4.png"
                priority
                width={400}
                height={400}
                alt="Avatar"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-white space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold leading-relaxed text-center lg:text-left">
                Desarrollador de software con experiencia de un año en optimización de
                procesos, automatización de tareas y creación de soluciones
                internas. Participé en
                <strong> Andes-BPO</strong>, donde contribuí a la automatización
                de procesos y al desarrollo de un{" "}
                <strong>CRM para gestión de cobros</strong>. Además, he
                trabajado de manera <strong>freelance</strong>, gestionando
                proyectos de principio a fin, desde el levantamiento de
                requisitos hasta la entrega final, adaptándome a las necesidades
                de cada cliente
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-4 sm:pt-6">
              <a
                href="/portfolio"
                className="w-full sm:w-auto px-6 py-3 text-base sm:text-lg text-center border-2 
                         rounded-xl transition-all hover:shadow-xl hover:shadow-white/50"
              >
                Ver proyectos
              </a>
              <a
                href="https://wa.me/3218663222"
                className="w-full sm:w-auto px-6 py-3 text-base sm:text-lg text-center border-2 
           rounded-xl text-secondary border-secondary transition-all 
           hover:shadow-xl hover:shadow-secondary"
              >
                Contacta conmigo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
