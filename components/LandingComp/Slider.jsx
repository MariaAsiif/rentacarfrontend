
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Mousewheel, Keyboard } from "swiper";
import firstImage from '../../assests/images/bmw.png'
import SecondImage from '../../assests/images/bmw2.png'
import Image from 'next/image';
const LandingSlider = () => {
    return (
        <>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                keyboard={true}
                modules={[ Mousewheel, Autoplay,  Keyboard]}
                className="mySwiper border-t text-white"
            >
                <SwiperSlide>
                    <Image src={firstImage} alt="slider_image" width={"100%"} height={"100%"} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={SecondImage} alt="slider_image" width={"100%"} height={"100%"} />
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default LandingSlider