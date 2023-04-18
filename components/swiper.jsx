import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import '@/styles/swiper.module.css'

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";

export default function SWIPER() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <Image src={require('@/public/Home2.png')} alt={'play'} width="" height=""/>

                </SwiperSlide>
                <SwiperSlide>
                    <Image src={require('@/public/Home2.png')} alt={'play'} width="" height=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={require('@/public/Home2.png')} alt={'play'} width="" height=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={require('@/public/Home2.png')} alt={'play'} width="" height=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={require('@/public/Home2.png')} alt={'play'} width="" height=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={require('@/public/Home2.png')} alt={'play'} width="" height=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={require('@/public/Home2.png')} alt={'play'} width="" height=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={require('@/public/Home2.png')} alt={'play'} width="" height=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={require('@/public/Home2.png')} alt={'play'} width="" height=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={require('@/public/Home2.png')} alt={'play'} width="" height=""/>
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image src={require('@/public/Home2.png')} alt={'play'} width="" height=""/>

                </SwiperSlide>
                <SwiperSlide>
                    <Image src={require('@/public/Home2.png')} alt={'play'} width="" height=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={require('@/public/Home2.png')} alt={'play'} width="" height=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={require('@/public/Home2.png')} alt={'play'} width="" height=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={require('@/public/Home2.png')} alt={'play'} width="" height=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={require('@/public/Home2.png')} alt={'play'} width="" height=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={require('@/public/Home2.png')} alt={'play'} width="" height=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={require('@/public/Home2.png')} alt={'play'} width="" height=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={require('@/public/Home2.png')} alt={'play'} width="" height=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={require('@/public/Home2.png')} alt={'play'} width="" height=""/>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
