import {
    Login_container,
    Login_image, Squares_container, Varification_btn,
    Varification_form,
    Wrapper
} from "@/styled components/login-style";
import Head from 'next/head'
import Image from "next/image";
import AuthCode from "react-auth-code-input";
import {useState} from "react";
function Login() {
    let[code,setCode]=useState('');
    function handleOnChange(res){
        setCode(res)
        console.log(res)
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
                            length={4}
                            containerClassName='container'
                            inputClassName='input'
                            allowedCharacters="numeric"
                        />
                    </Squares_container>

                    <Varification_btn>
                        <div className='btn'>تایید و ادامه</div>
                        <span className='time'>0:59</span>
                        <span className="underline">ارسال مجدد کد</span>

                    </Varification_btn>
                </Varification_form>

                <Login_image>
                    <Image src={require('@/public/login.jpeg')} alt='login' width='' height=''/>
                </Login_image>

            </Login_container>
    </>
}

export default Login;