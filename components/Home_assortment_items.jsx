import {Assortment_item} from '@/styled components/Home-style'
import Image from "next/image";
import axios from "@/pages/api/axios";
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
            const response =  axios.get(`/filter/?size=10&page=1&${type}=true`
            ).then(function (response) {
                    console.log("log",response.data)
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
            pathname: `/product/${item.id}`,

        }, `/product/${item.id}`);
    }

    return <>
        {items?items.map((item,index)=>{
            return <Assortment_item key={index} onClick={()=>handleClick(item)}>
                <Image src={require('@/public/b5.png')} width='' height='184' alt='انگشتر'/>
                <div>{item.title}</div>
                <s>{(item.totalPrice)}</s>
                <div className='price'>{(item.finalPrice)}</div>
              <div className='buy_icon' onClick={()=>handleClick(item)}><Image src={require('@/public/Buyicon.svg')} width='' height='15' alt='Buy'/></div>
            </Assortment_item>
        }):null}

    </>
}

export default HomeAssortmentItems;