import React, {useState} from 'react';
import {
    Ba, Card_container, Card_header,
    GlobalStyle, Infos, Installment_Btn, Installment_container, Installment_table, Payment_container, Payment_info,

} from "@/styled components/payment-style";
import ReactSlider from "react-slider";
import RangeStyle from '@/styles/range.module.css'
import Image from "next/image";



function Payments(props) {
    let [type,setType]=useState('installment');
    return (
        <>
            <GlobalStyle  isopen={props.isopen}/>
            <Ba isopen={props.isopen}></Ba>
            <Card_container isopen={props.isopen}>
                <Card_header type={type}>
                    <div className="right" onClick={()=>{setType('payment')}}><span>پرداخت</span></div>
                    <div className="left" onClick={()=>{setType('installment')}}><span>قسط ها</span></div>
                </Card_header>
                {type==='installment'?<Installment handleIsOpen={props.handleisopen}/>:<PAYMENT  handleIsOpen={props.handleisopen}/>}
            </Card_container>
        </>
    );
}
function Installment(props){
    return <> <Installment_container>
        <Infos>
            <div>گرم پرداخت شده:</div>
            <div>قیمت پرداخت:</div>
            <div>باقیمانده ی گرم:</div>
            <div>باقیمانده ی قیمت:</div>
        </Infos>
        <Installment_table>
            <div className="table_title">
                <div>هزینه باقیمانده</div>
                <div>گرم باقیمانده</div>
                <div>تاریخ پرداخت قسط</div>
                <div>تاریخ اتمام قسط</div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </Installment_table>

    </Installment_container>
        <Installment_Btn><div onClick={props.handleIsOpen}>پرداخت قسط بعد</div></Installment_Btn>
    </>
}
function PAYMENT(props){
    let [value,setValue]=useState(0);
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    return<>
        <Payment_container>
            <Image src={require('@/public/payment.png')} width='' height='' alt='img'/>
            <Payment_info>
                <div className="info_text">
                    <div>ست دستبند و انگشتر شکوفه ای</div>
                    <h6>قیمت : 2,250000 تومان</h6>
                    <div>اجرت: %20 </div>
                </div>
                <p>حداقل گرم برای قست اول را تعیین کنید</p>
                <div className='range_input'>
                    <ReactSlider
                        className="customSlider"
                        trackClassName="customSlider-track"
                        thumbClassName="customSlider-thumb"
                        max={20}
                        min={0}
                        value={5}
                    />
                    <div className='value'>2.9</div>
                </div>
                <div className={"price"}>قیمت قست اول: 500000 تومان </div>
                <Installment_Btn><div onClick={props.handleIsOpen}>پرداخت قسط اول</div></Installment_Btn>
            </Payment_info>
        </Payment_container>
    </>
}
export default Payments;