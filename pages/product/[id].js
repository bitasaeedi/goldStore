import {
    Amount,
    Button1,
    Button2,
    Left_section,
    Middle_product_info,
    Middle_section,
    Product_container,
    Product_title,
    Products,
    Responsive_btn,
    Responsive_info,
    Right_section,
} from '@/styled components/product-style'
import Image from "next/image";
import React, {useState} from 'react';
import ReactStars from 'react-stars'
import SWIPER from "@/components/swiper";
import Payment from "@/components/payment";
import {useRouter} from "next/router";
import axios from "axios";
import {log} from "next/dist/server/typescript/utils";

function Id() {
    const router = useRouter()
    const item = JSON.parse(router.query.product);
    const [product,setProduct]=useState();
    let [isOpen, setIsOpen] = useState(false)
    let [amount, setAmount] = useState(2);

    function handlePayment() {
        setIsOpen(!isOpen);
    }

    async function addToUserCart(){
        try {
            const response = await axios.put(`http://91.107.160.88:3001/v1/addToCart`,
                {
                    productId:item.id,
                    variantId: 1,
                    count: amount
                }
                ,{
                    headers: {
                        'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YzUwNWMzM2Q1N2EzNjI4NTc1MTBj' +
                            'ZCIsImlhdCI6MTY5MDcyMDcxMCwiZXhwIjoxNjk0MzIwNzEwfQ.fc9nyWMy-dYn2OnSt-E76T2a-njIUGhCC5J8t7U0Vjc'
                    }
                }
            ).then(function (response) {
                    console.log(response)
                }
            );
        } catch (error) {
            console.error('Error:', error.message);
            if (error.response.data.code) {
                alert('تعداد محصول کافی نیست')
            }
        }
    }
    async function getProduct() {
        try {
            const response = await axios.get(`http://91.107.160.88:3001/v1/product/64bfb0d44eb02b424be5510e`
                ,  {
                    headers: {
                        'access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmZlNmNhYzI2NWE4MDhhM2MzYTIwYy' +
                            'IsImlhdCI6MTY5MDU3Mzc4OSwiZXhwIjoxNjk0MTczNzg5fQ.QuJLCN72McA_cbVYE5CFQ4bTkNL3N6ZRESukU6Go-oc'
                    }
                }
                ).then(function (response) {
                console.log(response.data)
                setProduct(response.data)
                }
            );
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    return <>

        <Products>
            <Payment isopen={isOpen} handleisopen={handlePayment}/>
            <Product_title onClick={getProduct}>{'خانه > زیورآلات > انگشتر'}</Product_title>

            <Product_container>

                <Right_section>
                    <SWIPER/>
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
                    <p className='description'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                        طراحان
                        گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و
                        برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبودابزارهای کاربردی
                        می باشد.</p>
                    <Responsive_info>
                        <h5>قیمت : 2,290,000 تومان</h5>
                        <h6>رنگ <span></span></h6>
                        <div className='input'><input placeholder='زرد'/>
                            <Image src={require('@/public/more.svg')} alt="icon" width="" height=""/></div>
                        <h6>عیار</h6>
                        <div className='input'><input placeholder='123456'/>
                            <Image src={require('@/public/more.svg')} alt="icon" width="" height=""/></div>
                        <Amount>
                            <div>تعداد :</div>
                            <div><span className='left' onClick={() => {
                                setAmount(amount + 1)
                            }}>+</span>{amount}<span className='right' onClick={() => {
                                amount > 1 ? setAmount(amount - 1) : null
                            }}>-</span></div>
                        </Amount>
                    </Responsive_info>
                    <Middle_product_info>
                        <div>
                            <div className="info_title">وزن :</div>
                            <div className="info"></div>
                        </div>
                        <div>
                            <div className="info_title">تامین از :</div>
                            <div className="info"></div>
                        </div>
                        <div>
                            <div className="info_title">برند :</div>
                            <div className="info"></div>
                        </div>
                        <div>
                            <div className="info_title">اجرت هر گرم :</div>
                            <div className="info"></div>
                        </div>
                        <div>
                            <div className="info_title">تعداد اقساط :</div>
                            <div className="info"></div>
                        </div>
                        <div>
                            <div className="info_title">مبلغ قسط اول :</div>
                            <div className="info"></div>
                        </div>
                    </Middle_product_info>
                    <Responsive_btn>
                        <Button1>خرید مستقیم</Button1>
                        <Button2>
                            <div onClick={handlePayment}>خرید مستقیم</div>
                            <div>خرید مستقیم</div>
                        </Button2>
                    </Responsive_btn>
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
                        <div><span className='left' onClick={() => {
                            setAmount(amount + 1)
                        }}>+</span>{amount}<span className='right' onClick={() => {
                            amount > 1 ? setAmount(amount - 1) : null
                        }}>-</span></div>
                    </Amount>
                    <Button1 onClick={addToUserCart}>افزودن به سبد خرید</Button1>
                    <Button2>
                        <div onClick={handlePayment}>خرید مستقیم</div>
                        <div>خرید مستقیم</div>
                    </Button2>
                </Left_section>

            </Product_container>
        </Products>

    </>
}

export default Id;