import React from 'react'
import { Card } from 'reactstrap';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

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
                        slidesPerView: 6,
                    },
                }}
                speed={2500}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    waitForTransition: true,
                }}
            >
                <SwiperSlide ><img style={{ width:"700px", height:"600px"}}  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-1.png" alt="" /></SwiperSlide>
                <SwiperSlide ><img style={{ width:"700px", height:"600px"}}  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-1.png" alt="" /></SwiperSlide>
                <SwiperSlide ><img style={{ width:"700px", height:"600px"}}  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-1.png" alt="" /></SwiperSlide>
                <SwiperSlide ><img style={{ width:"700px", height:"600px"}}  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-1.png" alt="" /></SwiperSlide>
                <SwiperSlide ><img style={{ width:"700px", height:"600px"}}  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-1.png" alt="" /></SwiperSlide>
                <SwiperSlide ><img style={{ width:"700px", height:"600px"}}  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-1.png" alt="" /></SwiperSlide>
                <SwiperSlide ><img style={{ width:"700px", height:"600px"}}  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-1.png" alt="" /></SwiperSlide>
                <SwiperSlide ><img style={{ width:"700px", height:"600px"}}  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-1.png" alt="" /></SwiperSlide>

            </Swiper>

        </>
    )
}
