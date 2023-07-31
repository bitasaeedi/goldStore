import {Assortment_item} from '@/styled components/Home-style'
import Image from "next/image";
import axios from "axios";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
function HomeAssortmentItems({type}) {
    let[items,setItems]=useState();
    const router = useRouter();
    let images=[
        {img:require('@/public/b5.png')},
        {img:require('@/public/b4.png')},
        {img:require('@/public/b3.png')},
        {img:require('@/public/b2.png')},
        {img:require('@/public/b1.png')},
        {img:require('@/public/b1.png')},
        {img:require('@/public/b2.png')},
        {img:require('@/public/b3.png')},
        {img:require('@/public/b4.png')},
        {img:require('@/public/b5.png')},

    ]
    useEffect(()=>{
        try {
            const response =  axios.get(`http://91.107.160.88:3001/v1/filter?size=10&page=1&sort=${type}`
                ,{
                    headers: {
                        'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmY5M2RjNDlmM2FjNDMwODdkMmY3N' +
                            'iIsImlhdCI6MTY5MDI3NzQzOSwiZXhwIjoxNjkzODc3NDM5fQ.1x1GjSsc5-mOXMbZ2suHf04-_0N31wATGUasoB3qs-M'
                    }
                }
            ).then(function (response) {
                    console.log(response.data)
                    setItems(response.data);
                }
            );
        } catch (error) {
            console.error('Error:', error.message);
        }
    },[type])

    function handleClick(item){
        console.log(item)
        router.push({
            pathname: `/product/${item._id.$oid}`,
            query: {
                product:JSON.stringify(item)
            }
        }, `/product/${item._id.$oid}`);
    }

    return <>
        {items?items.map((item,index)=>{
            let amount=10000*item.weight*(1+item.wage);
            let amountWithDiscount=amount*(1-item.discount)
            return <Assortment_item key={index}>
                <Image src={require('@/public/b5.png')} width='' height='184' alt='انگشتر'/>
                <div>{item.title}</div>
                <s>{Math.round(amount*100)/100}</s>
                <div className='price'>{Math.round(amountWithDiscount*100)/100}</div>
              <div className='buy_icon' onClick={()=>handleClick(item)}><Image src={require('@/public/Buyicon.svg')} width='' height='15' alt='Buy'/></div>
            </Assortment_item>
        }):null}

    </>
}

export default HomeAssortmentItems;