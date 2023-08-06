import {
    Buy_btn, Checkout_container, Checkout_left_section, Checkout_right_section, Checkout_wrapper, Path
} from "@/styled components/checkout-style";
import PurchasedItem from "@/components/purchased_item";
import axios from "@/pages/api/axios";
import {useEffect, useState} from "react";

function Checkout() {
    let[changes,setChanges]=useState(false)

    const [products,setProducts]=useState();
    function handleChanges(){
        setChanges(!changes);
    }
    let newarray=[];
    useEffect(()=>{
        //get products in cart
        try {
            const response =  axios.get(`http://91.107.160.88:3001/v1/cart`,
                {
                    headers:{
                        'access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmZiNjQwNGViMDJiNDI0YmU1NTE2' +
                            'ZiIsImlhdCI6MTY5MDg1MjA1MywiZXhwIjoxNjk0NDUyMDUzfQ.rH8-oQoqTU9LSe8BUk9aeNx2mlSXJyWG2H0P-VfLKdg',

                    }
                }
            ).then(function (response ) {
                    console.log(response.data)
                    setProducts(response.data)

                }
            );
        } catch (error) {
            console.error('Error:', error.message);
            alert(error.response.message)
        }

    },[changes])


     newarray = products?products.products.map(item => ({
        "productId": item.productId,
        "variantId": item.variantId,
        "count": item.count
    })):[];

    async function buyProducts(){
        try {
            const response = await axios.post(`http://91.107.160.88:3001/v1/buyProduct`,
                newarray,
                {
                    headers:{
                        'access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmZiNjQwNGViMDJiNDI0YmU1NTE2' +
                            'ZiIsImlhdCI6MTY5MDg1MjA1MywiZXhwIjoxNjk0NDUyMDUzfQ.rH8-oQoqTU9LSe8BUk9aeNx2mlSXJyWG2H0P-VfLKdg',

                    }
                }
                ).then(function (response) {
                    console.log("b",response.data)
                }
            );
        } catch (error) {
            console.error('Error:', error);
            alert(error.response.data.message)
        }
    }

    return (
        <>
            <Checkout_wrapper>
                <Path>
                    <h4>سبد خرید</h4>
                    <div >شما {products?products.products.length:0} محصول دارید</div>
                </Path>

                <Checkout_container>

                    {/*right section*/}
                    <Checkout_right_section>
                        {products?<PurchasedItem products={products} handleChanges={handleChanges}/>:null}
                    </Checkout_right_section>

                    {/*left section*/}
                    <Checkout_left_section>
                        {products?<>  <div className="item">
                            <div>قیمت کالاها :</div><div>{products.totalPriceOfCart}</div>
                        </div>
                        <div className="item">
                            <div>مقدار تخفیف :</div><div>{products.discountPrice}</div>
                        </div>
                        <div className="item">
                            <div>هزینه ارسال :</div><div>{products.postPrice}</div>
                        </div>
                        <Buy_btn>
                            <div>
                                <div>جمع سبد خرید :</div><div>{products.paymentPrice}</div>
                            </div>
                            <button onClick={buyProducts}>ادامه</button>
                        </Buy_btn></>:null}
                    </Checkout_left_section>
                    <Buy_btn className='responsive_btn'>
                        <button className='responsive_btn' onClick={buyProducts}>ادامه</button>
                    </Buy_btn>
                </Checkout_container>
            </Checkout_wrapper>
        </>
    );
}

export default Checkout;