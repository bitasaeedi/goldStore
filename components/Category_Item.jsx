import {Category_item} from "@/styled components/category-style";
import Image from "next/image";
import {useEffect, useState} from "react";
import axios from "axios";
import { useRouter } from 'next/router';


function CategoryItem({list,price}) {
    const router = useRouter();

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
                return <Category_item key={index} onClick={()=>handleClick(item.id)}>
                    <Image src={item.thumbnailImage} alt='item' width='1000' height='100'/>
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