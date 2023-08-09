import {
    Buy_btn, Checkout_container, Checkout_left_section, Checkout_right_section, Checkout_wrapper, Path
} from "@/styled components/checkout-style";
import PurchasedItem from "@/components/purchased_item";
import axios from "@/pages/api/axios";
import {useEffect, useState} from "react";
import {Toast} from "@/components/toast";

function Checkout() {
    let[changes,setChanges]=useState(false)

    const [products,setProducts]=useState();

    function handleChanges(){
        setChanges(!changes);
    }

    let newarray=[];
    useEffect(()=>{
        //get products in cart
            axios.get(`/cart`
            ).then(function (response ) {
                    console.log(response)
                    setProducts(response.data)

                }
            ).catch(function (error) {
                console.error('Error:', error.message);
                Toast(error.response.data.message,false);
            });


    },[changes])


     newarray = products?products.products.map(item => ({
        "productId": item.productId,
        "variantId": item.variantId,
        "count": item.count
    })):[];

    async function buyProducts(){

            await axios.post(`/buyProduct`,
                newarray
                ).then(function (response) {
                    console.log(response.data)
                }
            ).catch(function (error) {
                console.error('Error:', error);
                alert(error.response.data.message)
            });
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
                        <>  <div className="item">
                            <div>قیمت کالاها :</div>{products?<div>{products.totalPriceOfCart}</div>:0}
                        </div>
                        <div className="item">
                            <div>مقدار تخفیف :</div>{products?<div>{products.discountPrice}</div>:0}
                        </div>
                        <div className="item">
                            <div>هزینه ارسال :</div>{products?<div>{products.postPrice}</div>:null}
                        </div>
                        <Buy_btn>
                            <div>
                                <div>جمع سبد خرید :</div>{products?<div>{products.paymentPrice}</div>:null}
                            </div>
                            <button onClick={buyProducts}>ادامه</button>
                        </Buy_btn></>
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