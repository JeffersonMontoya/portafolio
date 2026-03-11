"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <div className="z-20 w-full min-h-screen flex items-center relative overflow-hidden">
      {/* Subtle background glow accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-secondary/[0.03] rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/[0.03] rounded-full blur-3xl pointer-events-none"></div>

      <div className="z-20 grid items-center h-full p-6 py-28 md:py-0 md:grid-cols-2 gap-10 max-w-6xl mx-auto w-full">
        {/* Avatar Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.6, 0.3, 0.8] }}
          className="flex justify-center mb-6 md:mb-0 order-1 md:order-1"
        >
          <div className="relative w-60 h-60 md:w-72 md:h-72 group">
            {/* Animated glow ring */}
            <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 via-transparent to-secondary/10 rounded-full blur-2xl group-hover:from-secondary/30 group-hover:to-secondary/20 transition-all duration-700 animate-pulse"></div>
            <div className="absolute -inset-1 bg-gradient-to-br from-secondary/30 to-secondary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Image
              src="/home-4.png"
              priority
              width={400}
              height={400}
              alt="Jefferson Montoya - Desarrollador Fullstack"
              className="relative z-10 w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.6, 0.3, 0.8] }}
          className="flex flex-col justify-center order-2 md:order-2"
        >
          {/* Role badge */}
          <div className="flex items-center justify-center md:justify-start mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium tracking-wide">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
              Desarrollador Fullstack
            </span>
          </div>

          <h1 className="mb-5 text-3xl leading-tight text-center md:text-left md:text-5xl font-bold">
            Desarrollo soluciones
            <br />
            <TypeAnimation
              sequence={[
                "que escalan tu negocio",
                2500,
                "con arquitectura limpia",
                2500,
                "que automatizan procesos",
                2500,
                "de alto rendimiento",
                2500,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="font-bold text-secondary"
            />
          </h1>

          <p className="mx-auto mb-8 text-base md:text-lg text-center md:text-left md:mx-0 text-white/60 leading-relaxed max-w-lg">
            Transformo ideas en productos digitales robustos con{" "}
            <span className="text-white/90 font-medium">React</span>,{" "}
            <span className="text-white/90 font-medium">Vue.js</span>,{" "}
            <span className="text-white/90 font-medium">Node.js</span> y{" "}
            <span className="text-white/90 font-medium">Firebase</span>.
            Especializado en CRM, automatización y arquitecturas escalables.
          </p>

          <div className="flex items-center justify-center gap-4 md:justify-start">
            <a
              href="/portfolio"
              className="group relative px-7 py-3.5 text-sm font-bold rounded-xl bg-secondary text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-secondary/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative z-10">Ver proyectos</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="https://wa.me/3218663222"
              className="px-7 py-3.5 text-sm font-bold rounded-xl border border-white/20 text-white/80 hover:border-secondary hover:text-secondary transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Contacta conmigo
            </a>
          </div>

         
        </motion.div>
      </div>
    </div>
  );
};

export default Introduction;
