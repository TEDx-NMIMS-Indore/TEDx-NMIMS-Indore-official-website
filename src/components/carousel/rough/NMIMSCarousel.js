import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./NMIMSCarousel.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import {Autoplay, Pagination, Navigation } from "swiper";

export default function NMIMSCarousel() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                // spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                centeredSlides={true}
                centeredSlidesBounds={true}
                centerInsufficientSlides={true}
            >
                <SwiperSlide>
                    <div className="swiperSlide">
                        <img
                            loading="lazy"
                            alt="NMIMS, Indore campus images"
                            decoding="async"
                            src="images/NMIMS/1.webp"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiperSlide">
                        <img
                            loading="lazy"
                            alt="NMIMS, Indore campus images"
                            decoding="async"
                            src="images/NMIMS/2.webp"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiperSlide">
                        <img
                            loading="lazy"
                            alt="NMIMS, Indore campus images"
                            decoding="async"
                            src="images/NMIMS/3.webp"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiperSlide">
                        <img
                            loading="lazy"
                            alt="NMIMS, Indore campus images"
                            decoding="async"
                            src="images/NMIMS/4.webp"
                        />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="swiperSlide">
                        <img
                            loading="lazy"
                            alt="NMIMS, Indore campus images"
                            decoding="async"
                            src="images/NMIMS/6.webp"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide class="swiper-scrollbar"></SwiperSlide>
            </Swiper>
        </>
    );
}
