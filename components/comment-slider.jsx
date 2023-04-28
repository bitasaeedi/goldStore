import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper";
import style from '@/styles/commentslider.module.css';
import {
    Comment_profile,
    Comment_user_info,
    Responsive_comments,
    Responsive_comments_text
} from "@/styled components/Home-style";
import Image from "next/image";

function CommentSlider(props) {
    let comments = [
        {
            img: require('@/public/pro1.jpg'),
            user_name: 'مریم',
            post: 'توسعه دهنده فرانت',
            text: "لورم اپیسوم متن ساختگی  با تولید سادگی نامفهوم از صنعت  چاپلورم اپیسوم متن ساختگی  با تولید سادگی نامفهوم.",
            date: "29 اردیبهشت 1400"
        },
        {
            img: require('@/public/pro2.jpg'),
            user_name: 'محمد',
            post: 'گرافیست',
            text: "لورم اپیسوم متن ساختگی  با تولید سادگی نامفهوم از صنعت  چاپلورم اپیسوم متن ساختگی  با تولید سادگی نامفهوم.",
            date: "29 اردیبهشت 1400"
        },
        {
            img: require('@/public/pro2.jpg'),
            user_name: 'پرهام',
            post: 'دیزاینر',
            text: "لورم اپیسوم متن ساختگی  با تولید سادگی نامفهوم از صنعت  چاپلورم اپیسوم متن ساختگی  با تولید سادگی نامفهوم.",
            date: "29 اردیبهشت 1400"
        },
        {
            img: require('@/public/pro1.jpg'),
            user_name: 'مریم',
            post: 'توسعه دهنده فرانت',
            text: "لورم اپیسوم متن ساختگی  با تولید سادگی نامفهوم از صنعت  چاپلورم اپیسوم متن ساختگی  با تولید سادگی نامفهوم.",
            date: "29 اردیبهشت 1400"
        },
        {
            img: require('@/public/pro2.jpg'),
            user_name: 'محمد',
            post: 'گرافیست',
            text: "لورم اپیسوم متن ساختگی  با تولید سادگی نامفهوم از صنعت  چاپلورم اپیسوم متن ساختگی  با تولید سادگی نامفهوم.",
            date: "29 اردیبهشت 1400"
        },
        {
            img: require('@/public/pro2.jpg'),
            user_name: 'پرهام',
            post: 'دیزاینر',
            text: "لورم اپیسوم متن ساختگی  با تولید سادگی نامفهوم از صنعت  چاپلورم اپیسوم متن ساختگی  با تولید سادگی نامفهوم.",
            date: "29 اردیبهشت 1400"
        },
    ]
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className={style.MySwiper}
            >
                {comments.map((comment, index) => {
                    return <Responsive_comments key={index}>
                        <SwiperSlide key={index}>
                            <Comment_user_info>
                                <Comment_profile>
                                    <Image src={comment.img} alt={'play'} width="" height=""/>
                                </Comment_profile>
                                <div className='info'>
                                    <h6>{comment.user_name}</h6>
                                    <span>{comment.post}</span>
                                </div>
                            </Comment_user_info>
                            <Responsive_comments_text>
                                <div className='text'>{comment.text}</div>
                                <div className='date'>{comment.date}</div>
                            </Responsive_comments_text>
                        </SwiperSlide>
                    </Responsive_comments>
                })}
            </Swiper>
        </>
    );
}

export default CommentSlider;
