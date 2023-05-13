import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import styles from "@/styles/swiper.module.css"
import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";

export default function SWIPER() {
    const [thumbsSwiper, setThumbsSwiper] = useState({});

    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                    "--swiper-navigation-size": "18px",
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation]}
                className={styles.mySwiper2}
                // onSwiper={(w)=>{
                //     console.log("swiper",w)
                //     w.slideTo(4);
                // }}
            >
                <SwiperSlide>
                    <Image src={require('@/public/product.png')} alt={'play'} width="" height=""/>
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
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                    "--swiper-navigation-size": "10px",
                }}
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                slidesPerView={4}
                // modules={[FreeMode, Navigation, Thumbs]}
                className={styles.mySwiper}
            >
                <SwiperSlide>
                    <Image src={require('@/public/p1.png')} alt={'play'} width="" height=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={require('@/public/p2.png')} alt={'play'} width="" height=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={require('@/public/p3.png')} alt={'play'} width="" height=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={require('@/public/p4.png')} alt={'play'} width="" height=""/>
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
