import React from 'react'
import { Card } from 'reactstrap';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import img from "../../src/Images/file.png";

export default function ShowcaseSlider() {
  return (
        <>
            <Swiper style={{ paddingTop: "0", paddingBottom: "5em",zIndex:"0"}}
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={20}
                slidesPerView={6}
                loop={true}
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                speed={2500}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    waitForTransition: true,
                }}
            >
                <SwiperSlide ><img style={{height:"650px"}}  src={img} alt="" /></SwiperSlide>
                <SwiperSlide ><img style={{height:"650px"}}  src={img} alt="" /></SwiperSlide>
                <SwiperSlide ><img style={{height:"650px"}}  src={img} alt="" /></SwiperSlide>
                <SwiperSlide ><img style={{height:"650px"}}  src={img} alt="" /></SwiperSlide>
                <SwiperSlide ><img style={{height:"650px"}}  src={img} alt="" /></SwiperSlide>
                <SwiperSlide ><img style={{height:"650px"}}  src={img} alt="" /></SwiperSlide>

            </Swiper>

        </>
    )
}
