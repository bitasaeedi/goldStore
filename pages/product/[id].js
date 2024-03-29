import {Amount, Button1, Button2, Left_section, Middle_product_info, Middle_section,
    Product_container, Product_title, Products, Responsive_btn, Responsive_info, Right_section,
} from '@/styled components/product-style'
import Image from "next/image";
import React, {useEffect, useState} from 'react';
import ReactStars from 'react-stars'
import SWIPER from "@/components/swiper";
import Payment from "@/components/payment";
import {useRouter} from "next/router";
import axios from "@/pages/api/axios";
import {Toast} from "@/components/toast";
import {ToastContainer} from "react-toastify";
import AXI from "axios";
import {formatNumber} from "@/components/checkPatern";

function Id() {

    const router = useRouter();
    let{query}=useRouter();
    let [item, setItem] = useState();
    let [isOpen, setIsOpen] = useState(false);
    let [weightIsOpen, setWeightIsOpen] = useState(false);
    let [amount, setAmount] = useState(1);
    let [varient, setVarient] = useState();

    console.log(router.query.id)
    useEffect(() => {
            axios.get(`/product/${query.id}`
            ).then(function (response) {
                    console.log(response.data)
                    setItem(response.data)
                    setVarient(response.data.variants[0])
                }
            ).catch(function (error) {
                console.log(error);
            });

    }, [])

    function handlePayment() {
        if(varient.installment.available){
            setIsOpen(!isOpen);
        }
        else{
            Toast('این محصول قسطی نیست',false)
        }
    }

    //خرید در سبد خرید
    async function addToUserCart() {

        await axios.put(`/addToCart`,
            {
                productId: item.id,
                variantId: 1,
                count: amount
            }
        ).then(function (response) {
                console.log(response)
                Toast("به سبد اضافه شد", true)
            }
        ).catch(function (error) {
            console.error('Error:', error);
            if (error.response) {
                Toast(error.response.data.message, false)
            }
        });
    }

    //خرید مستقیم
    async function handleDirectPurchase() {

            await axios.post('/buyProduct',
                [{
                    productId: item.id,
                    variantId: 1,
                    count: amount
                }],
            ).then(function (response) {
                console.log(response)
                    Toast("خرید انجام شد", true)

            }).catch(function (error) {
                console.error('Error:', error);
                if (error.response) {
                    Toast(error.response.data.message, false)
                }
            });
    }


    return <>
        <ToastContainer/>
        {item && varient ? <Products>
            <Payment isopen={isOpen} handleisopen={handlePayment} item={item} variant={varient}/>
            <Product_title>
                <span onClick={()=>{
                    router.push({
                        pathname: '/',
                    }, '/');
                }}>{'خانه > '}</span>

                <span onClick={()=>{
                    router.push({
                        pathname: '/category/categories',
                    }, '/category/categories');
                }}>{' زیورآلات'}</span>
            </Product_title>

            <Product_container>
                {/*right*/}
                <Right_section>
                    <SWIPER image={item}/>
                </Right_section>

                {/*middle*/}
                <Middle_section>
                    <h4>{item.title}</h4>
                    <div className="stars">
                        <ReactStars
                            count={5}
                            size={23}
                            color2={'#ffd700'}
                            value={3}
                            edit={false}/>
                        <span className='number'>222</span><span> نظر</span></div>
                    <p className='description'>{item.description}</p>
                    <Responsive_info display={weightIsOpen}>
                        <h5>قیمت : {varient.totalPrice} تومان</h5>
                        <h6>رنگ <span></span></h6>
                        <div className='input'><input placeholder='زرد' readOnly/>
                            <span> <Image src={require('@/public/more.svg')} alt="icon" width="" height=""/></span></div>
                        <h6>وزن</h6>
                        <div className='input'>
                            <input placeholder='123456' value={varient.weight} readOnly/>
                            <span onClick={() => {
                                setWeightIsOpen(true)
                            }}><Image src={require('@/public/more.svg')} alt="icon" width="" height=""/></span>
                            <div>
                                {item.variants.map((v, index) => {
                                    return <div key={index} onClick={() => {
                                        setVarient(v);
                                        setWeightIsOpen(false);
                                        console.log(weightIsOpen)
                                    }}>{v.weight}</div>
                                })}
                            </div>
                        </div>
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
                            <div className="info_title">عیار :</div>
                            <div className="info">{item.weightUnit}</div>
                        </div>
                        <div>
                            <div className="info_title">تامین از :</div>
                            <div className="info">طلای تو</div>
                        </div>
                        <div>
                            <div className="info_title">برند :</div>
                            <div className="info"></div>
                        </div>
                        <div>
                            <div className="info_title">اجرت هر گرم :</div>
                            <div className="info">{item.wage}</div>
                        </div>
                        <div>
                            <div className="info_title">مدت زمان اقسات :</div>
                            <div className="info">{varient.installment.available ? varient.installment.deadLine : '-'}</div>
                        </div>
                        <div>
                            <div className="info_title">حدقل گرم قسط اول :</div>
                            <div className="info">{varient.installment.available ? varient.installment.minWeight : '-'}</div>
                        </div>
                    </Middle_product_info>
                    <Responsive_btn>
                        <Button1 onClick={addToUserCart}>افزودن به سبد خرید</Button1>
                        <Button2>
                            <div onClick={handleDirectPurchase}>خرید مستقیم</div>
                            <div onClick={handlePayment}>خرید قسطی</div>
                        </Button2>
                    </Responsive_btn>
                </Middle_section>

                {/*left*/}
                <Left_section display={weightIsOpen}>
                    <h5>قیمت : {formatNumber(varient.totalPrice)} تومان</h5>
                    <h6>رنگ <span></span></h6>
                    <div className='input'><input placeholder='زرد' readOnly/>
                        <span> <Image src={require('@/public/more.svg')} alt="icon" width="" height=""/></span></div>
                    <h6>وزن</h6>
                    <div className='input'  >
                        <input placeholder='123456' value={varient.weight} readOnly/>
                        <span onClick={() => {
                            setWeightIsOpen(true)
                        }}><Image src={require('@/public/more.svg')} alt="icon" width="" height=""/></span>
                        <div>
                            {item.variants.map((v, index) => {
                                return <div key={index} onClick={() => {
                                    setVarient(v);
                                    setWeightIsOpen(false);
                                    console.log(weightIsOpen)
                                }}>{v.weight}</div>
                            })}
                        </div>

                    </div>
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
                        <div onClick={handleDirectPurchase}>خرید مستقیم</div>
                        <div onClick={handlePayment}>خرید قسطی</div>
                    </Button2>
                </Left_section>

            </Product_container>
        </Products> : null}

    </>
}

export default Id;