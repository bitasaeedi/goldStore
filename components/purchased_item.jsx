import {Amount, Purchased_item} from "@/styled components/checkout-style";
import Image from "next/image";
import {useState} from "react";
import axios from "@/pages/api/axios";

function PurchasedItem() {

    let items = [
        {
            id: 1,
            image: require('@/public/c5.png'),
            title: 'ست انگشتر و گردنبند با نگین',
            price: '1,550,000'
        },
        {
            id: 2,
            image: require('@/public/c2.png'),
            title: 'ست انگشتر و گردنبند با نگین',
            price: '1,550,000'
        },
        {
            id: 3,
            image: require('@/public/c7.png'),
            title: 'ست انگشتر و گردنبند با نگین',
            price: '1,550,000'
        }
    ]

    function handleItems(products) {

    }

    return <>
        {items.map((item, index) => {
            return <Purchased_item key={index}>
                <Image src={item.image} alt={'image'} width='' height=''/>
                <div className='info'>
                    <div className="title">{item.title}</div>
                    <div className='price'>{item.price} تومان</div>
                    <div className='delete_btn'>حذف از سبد خرید</div>
                </div>
                <AMOUNT id={item.id} setItems={items}/>
            </Purchased_item>
        })}

    </>
}

export default PurchasedItem;

function AMOUNT({id, items}) {

    let [amount, setAmount] = useState(1);

    async function addToCart() {
        try {
            const response = await axios.put(`http://91.107.160.88:3001/v1/addToCart`,
                {
                    productId:'',
                    variantId: 1,
                    count: 1
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

    async function removeFromCart({products}) {

        try {
            const response = await axios.put(`/removeFromCart`,
                {
                    productId: "64bff816c265a808a3c3a336",
                    variantId: 1,
                    count: 1
                },{
                    headers: {
                        'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YzUwNWMzM2Q1N2EzNjI4NTc1MTBj' +
                            'ZCIsImlhdCI6MTY5MDcyMDcxMCwiZXhwIjoxNjk0MzIwNzEwfQ.fc9nyWMy-dYn2OnSt-E76T2a-njIUGhCC5J8t7U0Vjc'
                    }
                }
            ).then(function (response) {
                    console.log(response.data)
                    setAmount(amount - 1)
                }
            );
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    return <Amount>
        <div onClick={addToCart}>+</div>
        <div className='number'>{amount}</div>
        <div onClick={removeFromCart}>-</div>
    </Amount>
}