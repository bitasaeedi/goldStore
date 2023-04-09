import {
    Buy_btn,
    Checkout_container,
    Checkout_left_section,
    Checkout_right_section,
    Checkout_wrapper,
    Path
} from "@/styled components/checkout-style";
import PurchasedItem from "@/components/purchased_item";

function Checkout() {
    return (
        <>
            <Checkout_wrapper>
                <Path>
                    <h4>سبد خرید</h4>
                    <div>شما 3 محصول دارید</div>
                </Path>

                <Checkout_container>

                    {/*right section*/}
                    <Checkout_right_section>
                        <PurchasedItem/>
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
                </Checkout_container>
            </Checkout_wrapper>
        </>
    );
}

export default Checkout;