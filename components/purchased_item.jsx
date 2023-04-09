import {Amount, Purchased_item} from "@/styled components/checkout-style";
import Image from "next/image";
import {useState} from "react";

function PurchasedItem() {
    let items = [
        {
            image: require('@/public/c5.png'),
            title: 'ست انگشتر و گردنبند با نگین',
            price: '1,550,000'
        },
        {
            image: require('@/public/c2.png'),
            title: 'ست انگشتر و گردنبند با نگین',
            price: '1,550,000'
        },
        {
            image: require('@/public/c7.png'),
            title: 'ست انگشتر و گردنبند با نگین',
            price: '1,550,000'
        }
    ]

    return <>
        {items.map((item, index) => {
            return <Purchased_item key={index}>
                <Image src={item.image} alt={'image'} width='' height=''/>
                <div>
                    <div className="title">{item.title}</div>
                    <div className='price'>{item.price} تومان</div>
                    <div className='delete_btn'>حذف از سبد خرید</div>
                </div>
                <AMOUNT/>
            </Purchased_item>
        })}

    </>
}

export default PurchasedItem;

function AMOUNT(){
    let [amount,setAmount]=useState(1);
    return <Amount>
        <div onClick={()=>{setAmount(amount+1)}}>+</div>
        <div className='number'>{amount}</div>
        <div onClick={()=>{amount>1?setAmount(amount-1):null}}>-</div>
    </Amount>
}