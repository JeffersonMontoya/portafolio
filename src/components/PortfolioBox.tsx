"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
            className="p-4 border border-teal-50 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform hover:translate-y-[-4px]"
            initial={{ opacity: 0, x: -100 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: 100 }} 
            transition={{ type: "spring", stiffness: 300, damping: 30 }} 
        >
            <h3 className="mb-4 text-xl font-bold text-center">{title}</h3>
            
            <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover object-top"
                />
            </div>
            <div className="flex flex-wrap gap-2 mt-4 mb-6 justify-center">
                {technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="px-4 py-1 text-sm font-medium bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-900"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className="flex justify-between gap-2 m-2">
                <Link href={urlGithub} target="_blank" rel="noopener noreferrer">
                    <motion.button
                        className="px-6 py-3 bg-teal-600 text-white rounded-lg text-sm font-semibold shadow-md hover:shadow-lg hover:bg-teal-700 transition-all duration-300"
                        whileHover={{
                            scale: 1.1,  
                            rotate: 5,  
                            transition: { type: "spring", stiffness: 400, damping: 10 } 
                        }}
                        whileTap={{ scale: 0.95 }} 
                    >
                        Ver en GitHub
                    </motion.button>
                </Link>
            </div>
        </motion.div>
    );
};

export default PortfolioBox;
