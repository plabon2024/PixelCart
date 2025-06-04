import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
const Banner = () => {
    return (
        <div>
             <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {" "}
        <SwiperSlide>
          <div className="relative bg-[url('/images/1.webp')] bg-cover bg-center bg-no-repeat  min-h-[calc(100vh-200px)]">

            <div
              className=" lg:absolute top-0 left-0 lg:top-1/3 lg:left-2/12 
              bg-opacity-50  rounded-xl 
             space-y-4 w-full md:w-1/4 lg:w-1/3 text-white "
            >
              <h2 className="text-3xl md:text-5xl font-bold">
                Your Green Journey Starts Here
              </h2>
              <p className="font-semibold">
                 Join us at the Green Living Expo 2025 to explore sustainable tools, attend expert-led workshops, 
  and connect with eco-conscious communities—all designed to help you grow a greener future.
              </p>
              <button className="btn ">Learn More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-[url('/images/3.jpg')] bg-cover bg-center bg-no-repeat  min-h-[calc(100vh-200px)]">
            {" "}
            <div
              className=" lg:absolute top-0 left-0 lg:top-1/3 lg:left-2/12 
              bg-opacity-50  rounded-xl 
             space-y-4 w-full md:w-1/4 lg:w-1/3 text-white "
            >
              <h2 className="text-3xl md:text-5xl font-bold  ">
                Urban Gardening Made Simple
              </h2>
              <p>
                 Join our upcoming Urban Gardening Workshop and learn how to grow fresh food 
  from your balcony, rooftop, or backyard—perfect for beginners and city dwellers alike.
              </p>
              <button className="btn ">Learn More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-[url('/images/2.jpg')] bg-cover bg-center bg-no-repeat  min-h-[calc(100vh-200px)]">
            {" "}
            <div
              className=" lg:absolute top-0 left-0 lg:top-1/3 lg:left-2/12 
              bg-opacity-50  rounded-xl 
             space-y-4 w-full md:w-1/4 lg:w-1/3 text-white "
            >
              <h2 className="text-3xl lg:text-5xl font-bold">Grow Together</h2>
              <p>
                Be part of our Green City Meetup 2025—connect with fellow urban gardeners, exchange ideas, 
  and get inspired to make your city greener, one plant at a time.
              </p>
              <button className="btn">Learn More</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Banner;