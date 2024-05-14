import React from 'react'
import { Card } from 'reactstrap';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function ShowcaseSlider() {
  return (
        <>
            <Swiper className='mt-10 max-xl:mt-0' style={{ paddingBottom: "5em", zIndex:"0"}}
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
                speed={1700}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    waitForTransition: true,
                }}
            >
                <SwiperSlide ><img className=' h-full' style={{ borderRadius:"15px"}} src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-2.png" alt="" /></SwiperSlide>
                <SwiperSlide ><img className=' h-full' style={{borderRadius:"15px"}}  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-4.png" alt="" /></SwiperSlide>
                <SwiperSlide ><img className=' h-full' style={{borderRadius:"15px"}}  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-5-new.png" alt="" /></SwiperSlide>
                <SwiperSlide ><img className=' h-full' style={{ borderRadius:"15px"}}  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-1.png" alt="" /></SwiperSlide>
                <SwiperSlide ><img className=' h-full' style={{borderRadius:"15px"}}  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-6-new.png" alt="" /></SwiperSlide>

            </Swiper>

        </>
    )
}
