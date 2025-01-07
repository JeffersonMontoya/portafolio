"use client"

import { dataCounter } from "@/data/data";
import CountUp from "react-countup";

const CounterServices = () => {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 justify-between max-w-full mx-auto my-8">
      {dataCounter.map(({ id, endCounter, text, lineRight, lineRightMobile }) => (
        <div key={id} className={`flex justify-center ${lineRight && 'ltr'}`}>
          <div className={`${lineRight && 'px-4 border-2 border-transparent md:border-e-gray-100'} ${lineRightMobile && 'border-e-gray-100'} p-4`}>
            <p className="flex mb-2 text-2xl font-extrabold md:text-4xl text-secondary">
              + <CountUp end={endCounter} start={0} duration={5} />
            </p>
            <p className="text-xs sm:text-sm md:text-base uppercase max-w-[100px] mx-auto">
              {text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CounterServices;
