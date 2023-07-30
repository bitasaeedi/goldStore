import {
    Buy_btn,
    Checkout_container,
    Checkout_left_section,
    Checkout_right_section,
    Checkout_wrapper,
    Path
} from "@/styled components/checkout-style";
import PurchasedItem from "@/components/purchased_item";
import axios from "@/pages/api/axios";
import {useState} from "react";

function Checkout() {

    const [products,setProducts]=useState();
    async function getProduct() {
        try {
            const response = await axios.get(`/cart`
            ).then(function (response ) {
                    console.log(response.data)
                    setProducts(response.data)
                }
            );
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    async function getProductsInfo(){

        try{

        }catch (error) {
            console.error('Error:', error.message);
        }
    }

    async function calculation() {
            try {
                const response = await axios.post(`/test-calc`,
                    products
                ).then(function (response) {
                        console.log(response.data.result)
                    }
                );
            } catch (error) {
                console.error('Error:', error.message);
            }
        }
    async function buyProducts(){
        try {
            const response = await axios.post(`/buyProduct`,
                products
                ).then(function (response) {
                    console.log(response.data.result)
                }
            );
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    return (
        <>
            <Checkout_wrapper>
                <Path>
                    <h4 onClick={getProduct}>سبد خرید</h4>
                    <div onClick={getProductsInfo}>شما 3 محصول دارید</div>
                </Path>

                <Checkout_container>

                    {/*right section*/}
                    <Checkout_right_section>
                        <PurchasedItem products={products}/>
                    </Checkout_right_section>

                    {/*left section*/}
                    <Checkout_left_section>
                        <div className="item">
                            <div>قیمت کالاها :</div><div>3,870,000</div>
                        </div>
                        <div className="item">
                            <div>مقدار تخفیف :</div><div>3,870,000</div>
                        </div>
                        <div className="item">
                            <div>هزینه ارسال :</div><div>رایگان</div>
                        </div>
                        <Buy_btn>
                            <div>
                                <div>جمع سبد خرید :</div><div>3,870,000</div>
                            </div>
                            <button>ادامه</button>
                        </Buy_btn>
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