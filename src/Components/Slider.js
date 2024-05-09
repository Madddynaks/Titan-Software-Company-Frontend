import React from 'react'
import { Card } from 'reactstrap';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
function Slider() {
    return (
        <>
            <Swiper style={{ paddingTop: "0", paddingBottom: "5em" }}
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={20}
                slidesPerView={6}
                loop={true} // Make the slider continuous
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
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide> <Card className='sliderimage' ><img className="home-slider-img" src="https://kartooncafe.com/wp-content/uploads/2023/05/cropped-Kartoon-Cafe-Final-Logo-Copy.png" alt="" /></Card></SwiperSlide>
                <SwiperSlide> <Card className='sliderimage'  ><img className="home-slider-img" src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/GI-Logo%20(1).png?updatedAt=1711628849372" alt="" /></Card></SwiperSlide>
                <SwiperSlide> <Card className='sliderimage'  ><img className="home-slider-img" src="https://ik.imagekit.io/2q7cgnqzi/monogram.png?updatedAt=1710738468690" alt="" /></Card></SwiperSlide>
                <SwiperSlide> <Card className='sliderimage' ><img className="home-slider-img" src="https://kartooncafe.com/wp-content/uploads/2023/05/cropped-Kartoon-Cafe-Final-Logo-Copy.png" alt="" /></Card></SwiperSlide>
                <SwiperSlide> <Card className='sliderimage'  ><img className="home-slider-img" src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/GI-Logo%20(1).png?updatedAt=1711628849372" alt="" /></Card></SwiperSlide>
                <SwiperSlide> <Card className='sliderimage'  ><img className="home-slider-img" src="https://ik.imagekit.io/2q7cgnqzi/monogram.png?updatedAt=1710738468690" alt="" /></Card></SwiperSlide>
                <SwiperSlide> <Card className='sliderimage' ><img className="home-slider-img" src="https://kartooncafe.com/wp-content/uploads/2023/05/cropped-Kartoon-Cafe-Final-Logo-Copy.png" alt="" /></Card></SwiperSlide>
                <SwiperSlide> <Card className='sliderimage'  ><img className="home-slider-img" src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/GI-Logo%20(1).png?updatedAt=1711628849372" alt="" /></Card></SwiperSlide>
                <SwiperSlide> <Card className='sliderimage'  ><img className="home-slider-img" src="https://ik.imagekit.io/2q7cgnqzi/monogram.png?updatedAt=1710738468690" alt="" /></Card></SwiperSlide>

            </Swiper>

        </>
    )
}

export default Slider
