import {
    Amount, Button1, Button2,
    Left_section,
    Middle_section,
    Product_container,
    Product_title, Products,
    Right_section,
    Wrapper
} from '@/styled components/product-style'
import Image from "next/image";
import React from 'react';
import ReactStars from 'react-stars'
function Product() {
    return <>
        <Wrapper>
            <Products>
                <Product_title>{'خانه > زیورآلات > انگشتر'}</Product_title>
                <Product_container>
                    <Right_section></Right_section>
                    <Middle_section>
                        <h4>انگشتر طلا طرح گل</h4>
                        <ReactStars
                            count={5}
                            size={24}
                            color2={'#ffd700'} />
                    </Middle_section>
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
                        <Button1>خرید مستقیم</Button1>
                        <Button2>
                            <div>خرید مستقیم</div>
                            <div>خرید مستقیم</div>
                        </Button2>
                    </Left_section>
                </Product_container>
            </Products>
        </Wrapper>
    </>
}

export default Product;