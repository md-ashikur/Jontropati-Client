import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Navigation, Autoplay } from "swiper";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard/ReviewCard";

const Review = () => {
  const [slides, setSlides] = useState(ReviewCard);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className="lg:px-20 px-4 py-5 ">
      <h1 className="text-5xl font-bold text-primary text-center uppercase my-5">Client Reviews</h1>
      <Swiper
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        breakpoints={{
          390: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {slides.map((elem) => {
          const { id, picture, name, description } = elem;

          return (
        //    ==============Slide cards =================
            <SwiperSlide className="flex flex-col items-center" key={id}>
              <img
                className=" w-20 relative border-4 border-white top-10 rounded-full"
                src={picture}
                alt=""
              />
              <figure className="flex flex-col shadow-lg border-2 overflow-hidden rounded border-primary items-center h-64 py-10">
                <h5 className=" text-lg font-semibold my-3">{name}</h5>
                <p className="mx-5 text-center">{description}</p>
              </figure>
            </SwiperSlide>
          );
        })}

        {/* ================
        Navigation buttons
        ============================ */}
        <div className="flex my-5 text-3xl justify-center gap-3">
          <div ref={navigationPrevRef}>
            <BsArrowLeftShort className="w-20 rounded-full bg-primary text-white hover:pr-3" />
          </div>
          <div ref={navigationNextRef}>
            <BsArrowRightShort className="w-20 rounded-full bg-primary text-white hover:pl-3" />
          </div>
        </div>
      </Swiper>
    </div>
);
};
  

export default Review;
