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
                    delay: 4000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide> <Card className='sliderimage' ><img className="home-slider-img" src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo3-1.svg" alt="" /></Card></SwiperSlide>
                <SwiperSlide> <Card className='sliderimage'  ><img className="home-slider-img" src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo5-1.svg" alt="" /></Card></SwiperSlide>
                <SwiperSlide> <Card className='sliderimage'  ><img className="home-slider-img" src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo4-1.svg" alt="" /></Card></SwiperSlide>
                <SwiperSlide> <Card className='sliderimage' ><img className="home-slider-img" src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo1-1.svg" alt="" /></Card></SwiperSlide>
                <SwiperSlide> <Card className='sliderimage' ><img className="home-slider-img" src="https://ik.imagekit.io/2q7cgnqzi/icon/google-ar21.svg?updatedAt=1711448191760" alt="" /></Card></SwiperSlide>
                <SwiperSlide> <Card className='sliderimage' ><img className="home-slider-img" src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo2-1.svg" alt="" /></Card></SwiperSlide>
                <SwiperSlide> <Card className='sliderimage' ><img className="home-slider-img" src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo3-1.svg" alt="" /></Card></SwiperSlide>
                <SwiperSlide> <Card className='sliderimage' ><img className="home-slider-img" src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo5-1.svg" alt="" /></Card></SwiperSlide>
                <SwiperSlide> <Card className='sliderimage' ><img className="home-slider-img" src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo4-1.svg" alt="" /></Card></SwiperSlide>
                <SwiperSlide> <Card className='sliderimage' ><img className="home-slider-img" src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo1-1.svg" alt="" /></Card></SwiperSlide>
                <SwiperSlide> <Card className='sliderimage' ><img className="home-slider-img" src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/client-logo1-1.svg" alt="" /></Card> </SwiperSlide>
            </Swiper>

        </>
    )
}

export default Slider
