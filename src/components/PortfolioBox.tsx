"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface PortfolioItem {
  id: number;
  title: string;
  image: string;
  urlGithub: string;
  technologies: string[];
}

interface PortfolioBoxProps {
  data: PortfolioItem;
}

const PortfolioBox = ({ data }: PortfolioBoxProps) => {
  const { id, title, image, urlGithub, technologies } = data;

  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-[#1c1c30]/40 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden hover:border-secondary/40 transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={250}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-darkBg/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link
            href={urlGithub}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg font-bold hover:scale-105 transition-all duration-300 shadow-lg shadow-secondary/10 text-sm"
          >
            GitHub <Github className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex-1">
          <h3 className="text-base font-bold mb-2 text-white group-hover:text-secondary transition-colors duration-300 leading-tight">
            {title}
          </h3>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-tight bg-white/5 text-white/40 border border-white/10 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t border-white/5 flex items-center justify-between">
          <Link
            href={urlGithub}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link flex items-center gap-1.5 text-xs font-bold text-secondary hover:text-white transition-all duration-300"
          >
            Ver código{" "}
            <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
          </Link>

          <span className="text-[9px] text-white/20 font-mono font-bold">
            #0{id}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioBox;
