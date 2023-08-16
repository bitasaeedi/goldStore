import {
    Login_btn, Login_container, Login_form, Login_image, Login_input, Login_input_title, Squares_container
} from "@/styled components/login-style";
import React, {useState} from 'react';
import Image from "next/image";
import AuthCode from "react-auth-code-input";
import {ToastContainer} from "react-toastify";
import {Toast} from "@/components/toast";
import axios from "@/pages/api/axios";
import {useRouter} from "next/router";
import {checkPattern} from "@/components/checkPatern";

function ChangePassword(props) {

    let [visibility, setVisibility] = useState(false);
    let [Code, setCode] = useState('');
    let[PhoneNumber,setPhoneNumber]=useState('');
    let[password1,setpassword1]=useState('');
    let[password2,setpassword2]=useState('');

    const router = useRouter();

    //handle visibility of password
    function handlePassword() {
        setVisibility(!visibility);
    }

    //save value of inputs
    function setValue(event) {
        if (event.target.name === 'phone') {
            setPhoneNumber(event.target.value)
        }
        else if(event.target.name === 'password1'){
            setpassword1(event.target.value)
        }
        else if(event.target.name === 'password2'){
            setpassword2(event.target.value)
        }
    }

    //save code
    function handleOnChange(res) {
        setCode(res)
    }

    //send code

    function handleSendCode(){
            axios.post('/user/forgetpassword',
                {phoneNumber: PhoneNumber},
            ).then(function (response) {
                    console.log(response)
                    Toast('کد تایید برای شما ارسال شد',true)
            }).catch(function (error) {
                console.log('Error:', error);
                if(error.response){
                    Toast(error.response.data.message,false)
                }
            });
    }
    function handleChangePassword(){
        if(password1===password2 && password1.length >= 8 && checkPattern(password1)){
             axios.post('/user/forgetPasswordVerification',
                {phoneNumber:PhoneNumber,
                    code:Code,
                    password:password1}
            ).then(function (response) {
                    Toast('رمز شما تغییر یافت',true)
                    router.push('http://talayto.com');
            }).catch(function (error) {
                console.error('Error:', error.message);
                if(error.response){
                    Toast(error.response.data.message,false);
                }
            });

        }
        else if(password1===password2 && password1.length <8){
            Toast('رمز باید حدقل 8 کاراکتر داشته باشد',false)
        }
        else if(password1===password2 && !checkPattern(password1)){
            Toast('رمز باید شامل عدد و حروف باشد',false)
        }
        else {
            Toast('رمز ورود و تکرار آن یکسان نسیت!',false)
        }
    }

    return (
        <>
            <ToastContainer/>
            <Login_container>
                <Login_form>
                    <h6>بازیابی رمز عبور</h6>
                    <div>
                        <Login_input_title>شماره همراه</Login_input_title>
                        <Login_input><input placeholder='شماره را وارد کنید' onChange={setValue}
                                            name={'phone'}/></Login_input>

                        <Login_btn onClick={handleSendCode} type2>ارسال کد</Login_btn>
                    </div>

                    <Squares_container type2>
                        <AuthCode
                            onChange={handleOnChange}
                            length={5}
                            containerClassName='container'
                            inputClassName='input'
                            allowedCharacters="numeric"
                        />
                    </Squares_container>

                    <div>
                        <Login_input_title>رمز ورود</Login_input_title>
                        <Login_input>
                            <input type={visibility ? 'text' : 'password'} placeholder='رمز را وارد کنید'
                                   onChange={setValue}
                                   name={'password1'}
                                   onKeyDown={() => {
                                   }}
                            />
                            <span className="material-icons-outlined"
                                  onClick={handlePassword}>{visibility ? 'visibility_off' : 'visibility'}</span></Login_input>

                        <Login_input_title>تکرار رمز ورود</Login_input_title>
                        <Login_input>
                            <input type={visibility ? 'text' : 'password'} placeholder='رمز را وارد کنید'
                                   onChange={setValue}
                                   name={'password2'}
                                   onKeyDown={() => {
                                   }}
                            />
                            <span className="material-icons-outlined"
                                  onClick={handlePassword}>{visibility ? 'visibility_off' : 'visibility'}</span></Login_input>
                    </div>

                    <div>
                        <Login_btn onClick={handleChangePassword}>تایید</Login_btn>
                    </div>

                </Login_form>

                <Login_image>
                    <Image src={require('@/public/login.jpeg')} alt='login' width='' height=''/>
                </Login_image>

            </Login_container>
        </>
    );
}

export default ChangePassword;