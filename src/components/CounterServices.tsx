"use client";

import { dataCounter } from "@/data/data";
import CountUp from "react-countup";

const CounterServices = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto my-8">
      {dataCounter.map(({ id, endCounter, text }) => (
        <div
          key={id}
          className="flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-secondary/30 transition-all duration-300"
        >
          <p className="text-3xl md:text-5xl font-bold text-secondary mb-2">
            +<CountUp end={endCounter} start={0} duration={3} />
          </p>
          <p className="text-sm md:text-base text-white/60 font-medium text-center uppercase tracking-wider">
            {text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CounterServices;
