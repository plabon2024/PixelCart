import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
const Banner = () => {
  return (
    <div className="w-full lg:h-[80vh]">
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="w-full h-full"
      >
        <SwiperSlide>
          <div className="w-full h-full relative">
            <img
              className="w-full h-full object-cover"
              src="/9742750.jpg"
              alt="Banner slide 1"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full relative">
            <img
              className="w-full h-full object-cover"
              src="/9742750.jpg"
              alt="Banner slide 2"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full relative">
            <img
              className="w-full h-full object-cover"
              src="/9742750.jpg"
              alt="Banner slide 2"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
