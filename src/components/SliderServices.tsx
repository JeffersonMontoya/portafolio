"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { serviceData } from "@/data/data";

const SliderServices = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="w-full pb-12"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col p-6 rounded-2xl cursor-pointer bg-white/5 backdrop-blur-sm border border-white/10 group hover:border-secondary/50 transition-all duration-300 h-full min-h-[180px]">
            <div className="mb-4 text-3xl text-secondary group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold text-white group-hover:text-secondary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderServices;
