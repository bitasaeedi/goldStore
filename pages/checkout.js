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
import {useEffect, useState} from "react";
import {Toast} from "@/components/toast";
import {ToastContainer} from "react-toastify";
import {useRouter} from "next/router";
import Image from "next/image";
import {formatNumber} from "@/components/checkPatern";

function Checkout() {
    let [changes, setChanges] = useState(false)
    let [buy, setBuy] = useState(false);
    const [products, setProducts] = useState();
    const router = useRouter();

    function handleChanges() {
        setChanges(!changes);
    }

    let newarray = [];
    useEffect(() => {
        //get products in cart
        axios.get(`/cart`
        ).then(function (response) {
                console.log(response)
                setProducts(response.data)
            }
        ).catch(function (error) {
            console.error('Error:', error.message);
            if(error.response.data.message){
            Toast(error.response.data.message, false);
            }
        });


    }, [changes, buy])


    newarray = products ? products.products.map(item => ({
        "productId": item.productId,
        "variantId": item.variantId,
        "count": item.count
    })) : [];

    async function buyProducts() {
        await axios.post(`/buyProduct`,
            newarray
        ).then(function (response) {
                console.log(response.data)
                Toast('خرید با موفقیت انجام شد', true)
                setBuy(!buy)
                router.push({
                    pathname: 'http://user.talayto.com/order',
                }, 'http://user.talayto.com/order');
            }
        ).catch(function (error) {
            Toast(error.response.data.message, false)
        });
    }

    return (
        <>
            <ToastContainer/>
            <Checkout_wrapper>
                <Path>
                    <h4>سبد خرید</h4>
                    <div>شما {products ? products.products.length : 0} محصول دارید</div>
                </Path>

                <Checkout_container>

                    {/*right section*/}
                    <Checkout_right_section>
                        {products ? <PurchasedItem products={products} handleChanges={handleChanges}/> :
                            <div className={"empty"}>
                                <Image src={require('@/public/cart.svg')} width='' height='' />
                                سبد خرید شما خالی است</div>}
                    </Checkout_right_section>

                    {/*left section*/}
                    <Checkout_left_section>
                        <>
                            <div className="item">
                                <div>قیمت کالاها :</div>
                                {products ? <div>{formatNumber(products.totalPriceOfCart)}</div> : 0}
                            </div>
                            <div className="item">
                                <div>مقدار تخفیف :</div>
                                {products ? <div>{formatNumber(products.discountPrice)}</div> : 0}
                            </div>
                            <div className="item">
                                <div>هزینه ارسال :</div>
                                {products ? <div>{formatNumber(products.postPrice)}</div> : null}
                            </div>
                            <Buy_btn>
                                <div>
                                    <div>جمع سبد خرید :</div>
                                    {products ? <div>{formatNumber(products.paymentPrice)}</div> : null}
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