import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import styles from "@/styles/swiper.module.css"
import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";

export default function SWIPER({image}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    console.log(image.thumbnailImage)
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
                modules={[FreeMode, Navigation, Thumbs]}
                className={styles.mySwiper2}
                // onSwiper={(w)=>{
                //     console.log("swiper",w)
                //     w.slideTo(4);
                // }}
            >
                <SwiperSlide>
                    <Image src={'http://91.107.160.88:3001/11ede8cb-a150-44d9-951d-c5a38819cd05_home2.png'} alt={'play'} width="40" height="416"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={require('@/public/p1.png')} alt={'play'} width="100" height="100"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={require('@/public/pro4.jpg')} alt={'play'} width="100" height="100"/>
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
            </Swiper>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                    "--swiper-navigation-size": "10px",
                }}
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className={styles.mySwiper}
            >
                <SwiperSlide>
                    <Image src={require('@/public/product.png')} alt={'play'} width="" height=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={require('@/public/p1.png')} alt={'play'} width="" height=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={require('@/public/pro4.jpg')} alt={'play'} width="" height=""/>
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
            </Swiper>
        </>
    );
}
