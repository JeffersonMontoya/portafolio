"use client";

import Link from "next/link";
import { socialNetworks } from "@/data/data";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Header = () => {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.6, 0.3, 0.8] }}
      className="fixed top-0 left-0 right-0 z-40"
    >
      {/* Solid background with subtle gradient bottom edge */}
      <div className="bg-darkBg border-b border-white/[0.06]">
        <div className="px-6 md:px-20 py-4">
          <div className="flex justify-between max-w-6xl mx-auto items-center">
            {/* Logo / Name */}
            <Link href="/" className="group flex items-center gap-1">
              <h1 className="text-xl md:text-2xl font-bold tracking-tight">
                <span className="text-white group-hover:text-white/90 transition-colors duration-300">
                  Jefferson
                </span>
                <span className="text-secondary ml-2 group-hover:text-orange-400 transition-colors duration-300">
                  Montoya
                </span>
              </h1>
            </Link>

            {/* Social Icons */}
            <div className="flex items-center gap-4 md:gap-5">
              {socialNetworks.map(({ logo, src, id }) => (
                <Link
                  key={id}
                  href={src}
                  target="_blank"
                  className="text-white/50 hover:text-secondary hover:scale-110 transition-all duration-300"
                >
                  {logo}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Subtle gradient glow at bottom */}
        <div className="h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
      </div>
    </motion.header>
  );
};

export default Header;
