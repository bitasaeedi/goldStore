import {Category_item} from "@/styled components/category-style";
import Image from "next/image";
import {useEffect, useState} from "react";
import axios from "axios";
import { useRouter } from 'next/router';


function CategoryItem({list,price}) {
    const router = useRouter();
    let items = [
        {
            image: require('@/public/c1.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c2.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c3.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c4.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c5.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c6.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c7.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c8.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c1.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c2.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c3.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c4.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c5.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c6.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c7.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c8.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c1.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c2.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c3.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
        {
            image: require('@/public/c4.png'),
            title: 'انگشتر طلا مدل آیینه ای',
            price1: '2,345,260',
            price2: '2,200,000 تومان'
        },
    ]

    function handleClick(id){
        console.log(id)
        router.push({
            pathname: `/product/${id}`,
            query: {
               productId:id
            }
        }, `/product/${id}`);
    }

    return (
        <>
            {list.map((item, index) => {
                let amount=price*item.weight*(1+item.wage);
                let amountWithDiscount=amount*(1-item.discount)
                return <Category_item key={index} onClick={()=>handleClick(item.id)}>
                    <Image src={ require('@/public/c4.png')} alt='item' width='' height=''/>
                    <h6 className='title'>{item.title}</h6>
                    <s className='price1'>{item.totalPrice}</s>
                    <div className='price2'>{item.finalPrice}</div>
                    <div className='info'><span className='material-icons'>star</span>
                    <div>3.2</div> <div>(222نظر)</div>
                    </div>
                </Category_item>
            })}

        </>
    );
}

export default CategoryItem;