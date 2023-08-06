import {Amount, Button1, Button2, Left_section, Middle_product_info, Middle_section,
    Product_container, Product_title, Products, Responsive_btn, Responsive_info, Right_section,
} from '@/styled components/product-style'
import Image from "next/image";
import React, {useEffect, useState} from 'react';
import ReactStars from 'react-stars'
import SWIPER from "@/components/swiper";
import Payment from "@/components/payment";
import {useRouter} from "next/router";
import axios from "axios";
import {Toast} from "@/components/toast";
import {ToastContainer} from "react-toastify";

function Id() {

    const router = useRouter();
    let[item,setItem]=useState();
    let [isOpen, setIsOpen] = useState(false);
    let [weightIsOpen, setWeightIsOpen] = useState(false);
    let [amount, setAmount] = useState(1);
    let [varient,setVarient]=useState();


    useEffect(()=>{
        try {
                    const response =  axios.get(`http://91.107.160.88:3001/v1/product/${router.query.id}`
                        ,  {
                            headers: {
                                'access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmZlNmNhYzI2NWE4MDhhM2MzYTIwYy' +
                                    'IsImlhdCI6MTY5MDU3Mzc4OSwiZXhwIjoxNjk0MTczNzg5fQ.QuJLCN72McA_cbVYE5CFQ4bTkNL3N6ZRESukU6Go-oc'
                            }
                        }
                        ).then(function (response) {
                        console.log(response.data)
                        setItem(response.data)
                        setVarient(response.data.variants[0])
                        }
                    ).catch(function (error) {
                        console.log(error);
                    });
                } catch (error) {
                    console.error('Error:', error);
                }
    },[])

    function handlePayment() {
        setIsOpen(!isOpen);
    }
    //خرید در سبد خرید
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
                        'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmZiNjQwNGViMDJiNDI0YmU1NTE2' +
                            'ZiIsImlhdCI6MTY5MDg1MjA1MywiZXhwIjoxNjk0NDUyMDUzfQ.rH8-oQoqTU9LSe8BUk9aeNx2mlSXJyWG2H0P-VfLKdg'
                    }
                }
            ).then(function (response) {
                    console.log(response)
                Toast("به سبد اضافه شد",true)
                }
            );
        } catch (error) {
            console.error('Error:', error);
            if (error.response) {
                Toast(error.response.data.message,false)
            }
        }
    }
    //خرید مستقیم
    async function handleDirectPurchase(){

        try {
            const response = await axios.post('http://91.107.160.88:3001/v1/buyProduct',
                [{ productId:item.id,
                    variantId: 1,
                    count: amount}],
                {
                    headers: {
                        'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmZhYTMwNGViMDJiNDI0YmU1NTA5My' +
                            'IsImlhdCI6MTY5MDI4Nzg1NSwiZXhwIjoxNjkzODg3ODU1fQ.WySC-UCpj8abMiiD3vaTA_QU9CrYjgPwy-80sIdCEf8'
                    }
                }).then(function (response) {
                console.log(response)

                if(response.status===200){
                    alert('خرید انجام شد')
                }
            });
        } catch (error) {
            console.error('Error:', error);
            if (error.response) {
                Toast(error.response.data.message,false)
            }
        }
    }


    return <>
        <ToastContainer />
        {item?<Products>
            <Payment isopen={isOpen} handleisopen={handlePayment} item={item} variant={varient}/>
            <Product_title>{'خانه > زیورآلات > انگشتر'}</Product_title>

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
                            <div className="info">{item.installment.available?item.installment.deadLine:'-'}</div>
                        </div>
                        <div>
                            <div className="info_title">گرم قسط اول :</div>
                            <div className="info">{item.installment.available?item.installment.minWeight:'-'}</div>
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
                <Left_section display={weightIsOpen}>
                    <h5>قیمت : {varient.totalPrice} تومان</h5>
                    <h6>رنگ <span></span></h6>
                    <div className='input'><input placeholder='زرد' readOnly/>
                       <span> <Image src={require('@/public/more.svg')} alt="icon" width="" height=""/></span></div>
                    <h6>وزن</h6>
                    <div className='input' >
                        <input placeholder='123456' value={varient.weight} readOnly/>
                       <span onClick={()=>{setWeightIsOpen(true)}}><Image src={require('@/public/more.svg')} alt="icon" width="" height=""/></span>
                        <div>
                            {item.variants.map((v,index)=>{
                                return  <div key={index} onClick={()=>{setVarient(v);setWeightIsOpen(false);
                                    console.log(weightIsOpen)}}>{v.weight}</div>
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
        </Products>:null}

    </>
}

export default Id;