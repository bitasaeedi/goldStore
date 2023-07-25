import {Comment_profile, Comment_user_info, Comments} from "@/styled components/Home-style";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import style from '@/styles/commentslider.module.css';
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);
function Home_Comments(props) {
    // const Swiper = new Swiper('.MySwiper', {
    //     // Default parameters
    //     slidesPerView: 'auto',
    //     spaceBetween: 30,
    //     // Responsive breakpoints
    //     breakpoints: {
    //         // when window width is >= 320px
    //         320: {
    //             slidesPerView: 1,
    //             spaceBetween: 20
    //         },
    //         // when window width is >= 480px
    //         500: {
    //             slidesPerView: 3,
    //             spaceBetween: 30
    //         },
    //         // when window width is >= 640px
    //
    //     }
    // })
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
    return <>
        {/*{comments.map((comment,index)=>{*/}
        {/*    return <Comments key={index} border={index===1?'true':'false'}>*/}
        {/*        <Comment_user_info>*/}
        {/*            <Comment_profile >*/}
        {/*            <Image src={comment.img} alt={'play'} width="" height=""/>*/}
        {/*            </Comment_profile>*/}
        {/*            <div className='info'>*/}
        {/*                <h6>{comment.user_name}</h6>*/}
        {/*                <span>{comment.post}</span>*/}
        {/*            </div>*/}
        {/*        </Comment_user_info>*/}
        {/*        <div>{comment.text}</div>*/}
        {/*        <div className='date'>{comment.date}</div>*/}
        {/*    </Comments>*/}
        {/*})}*/}

        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                300: {
                    slidesPerView: 1,
                },
               500: {
                    slidesPerView: 3,
                },
            }}

            modules={[Pagination]}
            autoplay={{ delay: 3000 }}
            className={style.MySwiper}

        >
            {comments.map((comment, index) => {
                return <SwiperSlide key={index}>
                    {({isNext})=>(
                    <Comments key={index} border={isNext ? 'true' : 'false'}>
                        <Comment_user_info>
                            <Comment_profile>
                                <Image src={comment.img} alt={'play'} width="" height=""/>
                            </Comment_profile>
                            <div className='info'>
                                <h6>{comment.user_name}</h6>
                                <span>{comment.post}</span>
                            </div>
                        </Comment_user_info>
                        <div>{comment.text}</div>
                        <div className='date'>{comment.date}</div>
                    </Comments>
                    )}
                </SwiperSlide>
            })}
        </Swiper>

    </>
}

export default Home_Comments;