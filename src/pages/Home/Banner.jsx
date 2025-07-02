import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { Link } from "react-router";
const Banner = () => {
  return (
    <div className="w-full lg:h-[80vh] container mx-auto">
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="w-full h-full"
      >
        {" "}
        <SwiperSlide>
          <div className="w-full h-full relative">
            <img
              className="w-full h-full object-cover"
              src="/2.jpg"
              alt="Banner slide 2"
            />
            <div className="absolute top-0 md:top-[50%] lg:right-50 right-5 text-white text-3xl font-bold space-y-5">
              <h1>Up to 50% discount on card payment</h1>
                 <Link to={"/categories"}>
                <button className="btn">Shop now </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
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
              src="/27331.jpg"
              alt="Banner slide 2"
            />
            <div className="absolute top-0 md:top-[50%] lg:left-50 left-5 text-white text-3xl font-bold space-y-5">
              <h1>Show now With Great Descount</h1>
              <Link to={"/categories"}>
                <button className="btn">Shop now </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
