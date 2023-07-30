import {
    Login_container,
    Login_image, Squares_container, Varification_btn,
    Varification_form,
} from "@/styled components/login-style";
import Head from 'next/head'
import Image from "next/image";
import AuthCode from "react-auth-code-input";
import {useEffect, useState} from "react";
import axios from "@/pages/api/axios";
import { useTimer } from 'react-timer-hook';
import { useRouter } from 'next/router';
function Login() {

    const router = useRouter();
//timer
    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 120);
    const {seconds, minutes, start, pause, resume, restart}
        = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
//save input code
    let[Code,setCode]=useState('');
    function handleOnChange(res){
        setCode(res)
    }
    //check code

    async function handleSubmit(){
        try {
            const response = await axios.post('/user/signup/verification',
                {phoneNumber:router.query.phoneNumber,
                    code:Code,
                    password:router.query.password},
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function (response) {
                console.log(response)
                if(response.status===200){
                    localStorage.setItem('accessToken', response.data.accessToken);
                    localStorage.setItem('refreshToken', response.data.refreshToken);
                    router.push('/');
                }
            });
        } catch (error) {
            console.error('Error:', error.message);
        }
    }
    async function HandleResendCode(){
        try {
            const response = await axios.post('/user/signup',
                {phoneNumber:router.query.phoneNumber},
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

        } catch (error) {
            console.log('Error:', error.message,error);
        }
        const time = new Date();
        time.setSeconds(time.getSeconds() + 120);
        restart(time)
    }


    return <>
        <Head>
            <meta name="format-detection" content="telephone=no"/>
        </Head>
            <Login_container>

                <Varification_form>
                    <div>
                        <h6>کد پیامک شده را وارد کنید</h6>
                        <div>کد تاییدی به شماره   09123456789 ارسال شد
                            لطفا ان را در باکس زیر وارد کنید</div>
                        <div className='gold'>ویرایش شماره</div>
                    </div>
                    <Squares_container>
                        <AuthCode
                            onChange={handleOnChange}
                            length={5}
                            containerClassName='container'
                            inputClassName='input'
                            allowedCharacters="numeric"
                        />
                    </Squares_container>

                    <Varification_btn>
                        <div className='btn' onClick={handleSubmit}>تایید و ادامه</div>
                        <span className='time'>{minutes}:{seconds}</span>
                        <span className="underline" onClick={HandleResendCode}>ارسال مجدد کد</span>
                    </Varification_btn>
                </Varification_form>

                <Login_image>
                    <Image src={require('@/public/login.jpeg')} alt='login' width='' height=''/>
                </Login_image>

            </Login_container>
    </>
}

export default Login;