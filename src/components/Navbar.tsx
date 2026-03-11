"use client";

import Link from "next/link";
import { MotionTransition } from "@/components/TransitionComponents";
import { usePathname } from "next/navigation";
import { itemsNavbar } from "@/data/data";

const Navbar = () => {
  const router = usePathname();

  return (
    <MotionTransition
      position="right"
      className="fixed bottom-6 left-0 z-50 flex flex-col items-center justify-center w-full mt-auto h-max"
    >
      <nav>
        <div className="flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl">
          {itemsNavbar.map((item) => (
            <div
              key={item.id}
              className={`p-3 transition-all duration-300 rounded-full cursor-pointer group relative ${
                router === item.link
                  ? "bg-secondary text-white"
                  : "hover:bg-secondary/20 text-white/70 hover:text-white"
              }`}
            >
              <Link href={item.link}>{item.icon}</Link>

              {/* Tooltip hint */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-darkBg text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-tighter">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </nav>
    </MotionTransition>
  );
};

export default Navbar;
