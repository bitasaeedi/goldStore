import Head from 'next/head'
import {All_comments, Assortment_container, Assortment_Header,
    Assortment_items_container, Assortment_title, Bottom_section, Collection_section_L, Comments_container,
    Compliment_container,Home_collection_container, Home_video, Home_video_container,
    Play_icon, See_more_btn, Top_section_items, Worthiness_container, Worthiness_item_container,
} from "@/styled components/Home-style";

import Image from "next/image";
import Home_assortment_items from "@/components/Home_assortment_items";
import Home_worthiness_item from "@/components/Home_worthiness_item";
import Home_Comments from "@/components/Home_Comments";
import CommentSlider from "@/components/comment-slider";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import { useAppContext } from '@/components/context';

export default function Home({loggedOut}) {

    let[assortmentType,setAssortmentType]=useState('newest');
    const { setIsLogged } = useAppContext();
    const router = useRouter();


    useEffect(()=>{
        if(loggedOut==='true'){
            localStorage.removeItem("access-token");
            localStorage.removeItem("refresh-token");
            setIsLogged(false);
        }
        else if(router.query.loggedOut==="false") {
        }
    },[])

    return (
        <>
                {/*video*/}
                <Home_video_container>
                    <Image src={require('@/public/home1.png')} alt="video" width="" height=""/>
                    <Home_video>
                        <Play_icon><Image src={require('@/public/play icon.svg')} alt={'play'} width="29" height="35"/></Play_icon>
                        <h6>فروشگاه طلای تو</h6>
                        <div> طلای تو اولین فروشگاه انلاین حوزه طلا می باشد که به شما اجازه می دهد در لحظه طلای مورد نظر
                            رابرای خود سفارش دهید
                        </div>
                        <button  onClick={()=>{
                            router.push({
                                pathname: '/category/categories',
                            }, '/category/categories');
                        }}>شروع خرید جواهرات</button>
                        <span      onClick={()=>{
                            router.push({
                                pathname: 'http://user.talayto.com',
                                query: {
                                    accessToken:localStorage.getItem("access-token")
                                }
                            }, 'http://user.talayto.com');
                        }}> خرید طلای اب شده</span>
                    </Home_video>
                </Home_video_container>

                {/*collection*/}
                <Home_collection_container>

                    <Top_section_items dir={'right'} onClick={()=>{
                        router.push({
                            pathname: '/category/ring',
                        }, '/category/ring');
                    }}>
                        <Image src={require('@/public/home2.png')} alt={'play'} width=""  height=""/>
                        <div>انگشتر های زنانه</div>
                        <See_more_btn dir={'right'}>{'مشاهده >'}</See_more_btn>
                    </Top_section_items>

                    <Top_section_items dir={'left'}
                                       onClick={()=>{
                        router.push({
                            pathname: 'http://user.talayto.com',
                            query: {
                                accessToken:localStorage.getItem("access-token")
                            }
                        }, 'http://user.talayto.com');
                    }}>
                        <div>خرید طلای آب شده</div>
                        <See_more_btn dir={'right'}>{'مشاهده >'}</See_more_btn>
                    </Top_section_items>


                    <Bottom_section onClick={()=>{
                        router.push({
                            pathname: '/category/Necklace',
                        }, '/category/Necklace');
                    }}>
                        <Image src={require('@/public/home4.png')} alt={'play'} width="" height=""/>
                    </Bottom_section>

                    <Collection_section_L
                        onClick={()=>{
                        router.push({
                            pathname: '/category/ring',
                        }, '/category/ring');
                    }}>
                        <Image src={require('@/public/home3.png')} alt={'play'} width="" height=""/>
                        <div>
                            <span>کالکشن </span>
                            حلقه های <br/>
                            زنانه و<br/>
                            مردانه
                        </div>
                        <See_more_btn dir={'left'}>{'مشاهده >'}</See_more_btn>
                    </Collection_section_L>

                    {/*<Collection_section_R>*/}

                    {/*    <Top_section>*/}
                    {/*        <Top_section_items dir={'right'}> <Image src={require('@/public/home2.png')} alt={'play'}*/}
                    {/*                                                 width="" height=""/>*/}
                    {/*            <div>انگشتر های زنانه</div>*/}
                    {/*            <See_more_btn dir={'right'}>{'مشاهده >'}</See_more_btn>*/}
                    {/*        </Top_section_items>*/}
                    {/*        <Top_section_items dir={'left'}>*/}
                    {/*            <div>خرید طلای آب شده</div>*/}
                    {/*            <See_more_btn dir={'right'}>{'مشاهده >'}</See_more_btn>*/}
                    {/*        </Top_section_items>*/}
                    {/*    </Top_section>*/}

                    {/*    <Bottom_section>*/}
                    {/*        <Image src={require('@/public/Home4.png')} alt={'play'} width="" height=""/>*/}
                    {/*    </Bottom_section>*/}

                    {/*</Collection_section_R>*/}

                    {/*<Collection_section_L>*/}
                    {/*    <Image src={require('@/public/Home3.png')} alt={'play'} width="" height=""/>*/}
                    {/*    <div>*/}
                    {/*        <span>کالکشن </span>*/}
                    {/*        حلقه های <br/>*/}
                    {/*        زنانه و<br/>*/}
                    {/*        مردانه*/}
                    {/*    </div>*/}
                    {/*    <See_more_btn dir={'left'}>{'مشاهده >'}</See_more_btn>*/}
                    {/*</Collection_section_L>*/}

                </Home_collection_container>

                {/*assortment*/}
                <Assortment_container>

                    <Assortment_Header>

                        <Assortment_title>
                            <div className={assortmentType==='newest'?'active':null} onClick={()=>setAssortmentType('newest')}>جدیدترین ها</div>
                            <div className={assortmentType==='cheapest'?'active':null} onClick={()=>setAssortmentType('cheapest')}>ارزان ترین ها</div>
                            <div className={assortmentType==='sell'?'active':null} onClick={()=>setAssortmentType('sell')}>پر فروش ترین ها</div>
                        </Assortment_title>

                        {/*<div>مشاهده ی بیشتر <h3>{'>'}</h3></div>*/}
                    </Assortment_Header>

                    <Assortment_items_container>
                        <Home_assortment_items type={assortmentType}/>
                    </Assortment_items_container>

                </Assortment_container>

                {/*compliment*/}
                <Compliment_container>
                    <div>
                        <Image src={require('@/public/bracelet.png')} alt={'play'} width="" height=""/>
                    </div>
                    <div className='text'>
                        دایموند اولین فروشگاه انلاین حوزه طلا می باشد که به شما اجازه می دهد در لحظه طلای مورد نظر را
                        برای خود سفارش دهید
                        <br/> دایموند اولین فروشگاه انلاین حوزه طلا می باشد که به شما اجازه می دهد در لحظه طلای مورد نظر
                        را برای خود سفارش دهید
                    </div>
                </Compliment_container>

                {/*worthiness*/}
                <Worthiness_container>
                    <h6>ارزش های برند ما</h6>
                    <Worthiness_item_container>
                        <Home_worthiness_item/>
                    </Worthiness_item_container>
                </Worthiness_container>

                {/*comments*/}
                <Comments_container>
                    <h6>نظرات کاربران</h6>
                    <div>لورم ایپسوم متن ساختگی با تولید سادگی <br/>
                        نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    </div>

                    <All_comments>
                        <Home_Comments/>
                    </All_comments>


                    {/*<Dott>*/}
                    {/*    <span className='this'></span><span></span><span></span><span></span>*/}
                    {/*</Dott>*/}
                </Comments_container>
        </>
    )
}
Home.getInitialProps = async ({ query }) => {
    const {loggedOut} = query

    return {loggedOut}
}