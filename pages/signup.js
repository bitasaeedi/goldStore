import {
    Btn_detail, Login_btn, Login_container, Login_form, Login_image, Login_input, Login_input_title,
} from "@/styled components/login-style";
import {useRouter} from 'next/router';
import Image from "next/image";
import 'material-icons/iconfont/material-icons.css'
import {useState} from "react";
import axios from "@/pages/api/axios";
import {Toast} from "@/components/toast";
import {ToastContainer} from "react-toastify";
import {checkPattern} from "@/components/checkPatern";

function Signup() {
    const router = useRouter();
    let [visibility, setVisibility] = useState(false);
    let [PhoneNumber, setPhoneNumber] = useState('');
    let [password, setpassword] = useState('');

    function handlePassword() {
        setVisibility(!visibility);
    }

    function setValue(event) {
        if (event.target.name === 'phone') {
            setPhoneNumber(event.target.value)
        } else
            setpassword(event.target.value)
    }

    function handleSignupBtn() {

        if (password.length < 8) {
            Toast('رمز باید حدقل 8 کاراکتر داشته باشد',false)
        }
        else if(!checkPattern(password)){
            Toast('رمز باید شامل عدد و حروف باشد ',false)
        }
        else {
               axios.post('/user/signup',
                    {phoneNumber: PhoneNumber},
                ).then(function (response) {
                    console.log(response)
                    if (response.status === 200) {
                        Toast('کد تایید برای شما ارسال شد',true)
                        router.push({
                            pathname: 'http://talayto.com/verification',
                            query: {
                                phoneNumber: PhoneNumber
                                , password: password
                            }
                        }, 'http://talayto.com/verification');
                    }

                }).catch(function (error) {
                   console.log('Error:', error);
                   if(error.response){
                       Toast(error.response.data.message,false)
                   }
               });

        }

    }

    function handleEnterInput (event){
        if(event.code==='Enter'){

            handleSignupBtn();
        }
    }

    return <>
        <ToastContainer />
        <Login_container>

            <Login_form>
                <h6>ساخت حساب کاربری</h6>
                <div>
                    <Login_input_title>شماره همراه</Login_input_title>
                    <Login_input><input placeholder='شماره را وارد کنید' onChange={setValue}
                                        name={'phone'}/></Login_input>
                </div>

                <div>
                    <Login_input_title>رمز ورود</Login_input_title>
                    <Login_input>
                        <input type={visibility ? 'text' : 'password'} placeholder='رمز را وارد کنید'
                               onChange={setValue}
                               name={'password'}
                               onKeyDown={handleEnterInput}
                        />
                        <span className="material-icons-outlined"
                              onClick={handlePassword}>{visibility ? 'visibility_off' : 'visibility'}</span></Login_input>

                </div>

                <div>
                    <Login_btn onClick={handleSignupBtn}>ثبت نام</Login_btn>
                    <Btn_detail>حساب کاربری دارید؟<span onClick={() => {
                        router.push('http://talayto.com/login')
                    }}>ورود</span></Btn_detail>
                </div>

            </Login_form>

            <Login_image>
                <Image src={require('@/public/login.jpeg')} alt='login' width='' height=''/>
            </Login_image>

        </Login_container>

    </>
}

export default Signup;