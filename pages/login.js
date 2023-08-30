import {Btn_detail, Forget_password, Login_btn, Login_container,
    Login_form, Login_image, Login_input, Login_input_title,
} from "@/styled components/login-style";
import Image from "next/image";
import {useState} from "react";
import 'material-icons/iconfont/material-icons.css'
import axios from "@/pages/api/axios";
import {useRouter} from "next/router";
import {Toast} from "@/components/toast";
import {ToastContainer} from "react-toastify";
import { useAppContext } from '@/components/context';
import {checkPhoneNumber} from "@/components/checkPatern";
import {log} from "next/dist/server/typescript/utils";

function Login() {
    const { setIsLogged } = useAppContext();
    const router = useRouter();
    let[PhoneNumber,setPhoneNumber]=useState('');
    let[password,setpassword]=useState('');
    let[visibility,setVisibility]=useState(false);

    function handlePassword(){
        setVisibility(!visibility);
    }

    function setValue(event){
        if(event.target.name==='phone'){
            setPhoneNumber(event.target.value)
        }
        else
            setpassword(event.target.value)
    }

   function handleSignBtn(){
       if(!checkPhoneNumber(PhoneNumber)){
           Toast('شماره وارد شده صحیح نیست',false)
       }
        else if (password.length < 8) {
            Toast('رمز باید حدقل 8 کاراکتر داشته باشد',false)
        } else {
             axios.post('/user/login',
                {
                    phoneNumber:PhoneNumber,
                    password:password
                }
            ).then(function (response) {
                console.log("response: ", response)
                if(response.status===200){
                    Toast('به حساب خود وارد شدید',true)
                    setIsLogged(true);
                    localStorage.setItem('access-token', response.data.accessToken);
                    localStorage.setItem('refresh-token', response.data.refreshToken);
                    router.push('/');
                }
            }).catch(function (error) {
                    console.error('Error:',error);
                        Toast(error.response.data.message,false);
            })}
    }

    function handleChangePassword(){
        console.log(10)
    }

    function handleEnterInput (event){
        if(event.code==='Enter'){
            handleSignBtn();
        }
    }
    return <>
        <ToastContainer />

            <Login_container>

                <Login_form>
                    <h6>ورود به حساب کاربری</h6>
                    <div>
                        <Login_input_title>شماره همراه</Login_input_title>
                        <Login_input><input placeholder='شماره را وارد کنید' onChange={setValue} name={'phone'}/></Login_input>
                    </div>

                    <div>
                        <Login_input_title>رمز ورود</Login_input_title>
                        <Login_input><input type={visibility?'text':'password'} placeholder='رمز را وارد کنید'
                                            onChange={setValue} name={'password'}
                                            onKeyDown={handleEnterInput}/>
                            <span className="material-icons-outlined" onClick={handlePassword}>{visibility?'visibility_off':'visibility'}</span></Login_input>


                        <Forget_password onCLick={handleChangePassword}>فراموشی رمز عبور</Forget_password>
                    </div>

                    <div>
                    <Login_btn onClick={handleSignBtn}>ورود</Login_btn>
                        <Btn_detail>حساب کاربری ندارید؟<span onClick={()=>{router.push('http://talayto.com/signup')}}>ساخت حساب</span></Btn_detail>
                    </div>

                </Login_form>

                <Login_image>
                    <Image src={require('@/public/login.jpeg')} alt='login' width='' height=''/>
                </Login_image>

            </Login_container>

    </>
}

export default Login;