import {
    Amount, Button1, Button2,
    Left_section, Middle_product_info,
    Middle_section,
    Product_container,
    Product_title, Products,
    Right_section,
    Wrapper
} from '@/styled components/product-style'
import Image from "next/image";
import React, {useState} from 'react';
import ReactStars from 'react-stars'
import SWIPER from "@/components/swiper";
import Payment from "@/components/payment";
function Product() {
    let [isOpen,setIsOpen]=useState(false)
    return <>
        <Wrapper>
            <Products>
                <Payment isopen={isOpen}/>
                <Product_title>{'خانه > زیورآلات > انگشتر'}</Product_title>

                <Product_container>

                    <Right_section>

                    </Right_section>
                    {/*middle*/}
                    <Middle_section>
                        <h4>انگشتر طلا طرح گل</h4>
                        <div className="stars">
                            <ReactStars
                                count={5}
                                size={23}
                                color2={'#ffd700'}
                            value={3}
                            edit={false}/>
                        <span className='number'>222</span><span> نظر</span></div>
                        <p className='description'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                            گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و
                            برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبودابزارهای کاربردی
                            می باشد.</p>
                        <Middle_product_info>
                            <div>
                                <div className="info_title">وزن : </div>
                                <div className="info"></div>
                            </div>
                            <div>
                                <div className="info_title">تامین از : </div>
                                <div className="info"></div>
                            </div>
                            <div>
                                <div className="info_title">برند : </div>
                                <div className="info"></div>
                            </div>
                            <div>
                                <div className="info_title">اجرت هر گرم : </div>
                                <div className="info"></div>
                            </div>
                            <div>
                                <div className="info_title">تعداد اقساط : </div>
                                <div className="info"></div>
                            </div>
                            <div>
                                <div className="info_title">مبلغ قسط اول : </div>
                                <div className="info"></div>
                            </div>
                        </Middle_product_info>
                    </Middle_section>

                    {/*left*/}
                    <Left_section>
                        <h5>قیمت : 2,290,000 تومان</h5>
                        <h6>رنگ <span></span></h6>
                        <div className='input'><input placeholder='زرد'/>
                            <Image src={require('@/public/more.svg')} alt="icon" width="" height=""/></div>
                        <h6>عیار</h6>
                        <div className='input'><input placeholder='123456'/>
                            <Image src={require('@/public/more.svg')} alt="icon" width="" height=""/></div>
                        <Amount>
                            <div>تعداد :</div>
                            <div><span className='left'>+</span>2<span className='right'>-</span></div>
                        </Amount>
                        <Button1 >خرید مستقیم</Button1>
                        <Button2>
                            <div onClick={()=>{setIsOpen(true)}}>خرید مستقیم</div>
                            <div>خرید مستقیم</div>
                        </Button2>
                    </Left_section>

                </Product_container>
            </Products>
        </Wrapper>
    </>
}

export default Product;