import {Btn_detail, Forget_password, Login_btn, Login_container,
    Login_form, Login_image, Login_input, Login_input_title,
} from "@/styled components/login-style";
import Image from "next/image";
import {useState} from "react";
import 'material-icons/iconfont/material-icons.css'
import axios from "axios";
import {useRouter} from "next/router";
import {Toast} from "@/components/toast";
import {ToastContainer} from "react-toastify";


function Login() {
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

    async function handleSignBtn(){
        // try {
        if (password.length < 8) {
            Toast('رمز باید حدقل 8 کاراکتر داشته باشد',false)
        } else {
            const res = await axios.post('http://91.107.160.88:3001/v1/user/login',
                {
                    phoneNumber:PhoneNumber,
                    password:password
                }
            ).then(function (response) {
                console.log("response: ", response)
                if(response.status===200){
                    localStorage.setItem('accessToken', response.data.accessToken);
                    localStorage.setItem('refreshToken', response.data.refreshToken);
                    router.push('/');
                }
            }).catch(function (error) {
                    console.error('Error:',error);
                        Toast(error.response.data.message,false);
            })}
        //     console.log("res: ", res)
        // } catch (error) {
        //     console.error('Error1:', error);
        // }

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
                        <Login_input><input type={visibility?'text':'password'} placeholder='رمز را وارد کنید' onChange={setValue} name={'password'}/>
                            <span className="material-icons-outlined" onClick={handlePassword}>{visibility?'visibility_off':'visibility'}</span></Login_input>


                        <Forget_password>فراموشی رمز عبور</Forget_password>
                    </div>

                    <div>
                    <Login_btn onClick={handleSignBtn}>ورود</Login_btn>
                        <Btn_detail>حساب کاربری ندارید؟<span onClick={()=>{router.push('/user/signup')}}>ساخت حساب</span></Btn_detail>
                    </div>

                </Login_form>

                <Login_image>
                    <Image src={require('@/public/login.jpeg')} alt='login' width='' height=''/>
                </Login_image>

            </Login_container>

    </>
}

export default Login;