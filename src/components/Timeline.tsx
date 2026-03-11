import { dataAboutPage } from "@/data/data";

const TimeLine = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="w-full max-w-4xl mx-auto md:pb-20 md:pt-4">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 sm:left-32 h-full w-px bg-white/10 ml-[7px] sm:ml-0"></div>

          {dataAboutPage.map((data) => (
            <div key={data.id} className="relative py-8 pl-8 sm:pl-48 group">
              {/* Dot */}
              <div className="absolute left-0 sm:left-32 w-4 h-4 bg-secondary rounded-full -translate-x-1.5 translate-y-2 border-4 border-darkBg z-10 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(245,116,28,0.5)]"></div>

              {/* Date (Mobile) */}
              <time className="sm:hidden block text-secondary font-mono text-sm mb-2">
                {data.date}
              </time>

              {/* Date (Desktop) */}
              <time className="hidden sm:flex absolute left-0 w-32 justify-end pr-8 text-secondary font-mono text-sm translate-y-1">
                {data.date}
              </time>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 group-hover:border-secondary/30 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-1 text-white">
                  {data.title}
                </h3>
                <div className="text-secondary/80 font-semibold mb-3">
                  {data.subtitle}
                </div>
                <p className="text-white/60 leading-relaxed text-lg">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
