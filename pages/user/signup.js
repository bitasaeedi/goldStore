import {
    Btn_detail,
    Login_btn,
    Login_container,
    Login_form,
    Login_image,
    Login_input,
    Login_input_title,
} from "@/styled components/login-style";
import {useRouter} from 'next/router';
import Image from "next/image";
import 'material-icons/iconfont/material-icons.css'
import {useState} from "react";
import axios from "axios";

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

    async function handleSignupBtn() {
        console.log(PhoneNumber)
        if (password.length < 8) {
            alert('تعداد کاراکتز های پسورد کمتر از 8 است.')
        } else {
            try {
                const response = await axios.post('http://91.107.160.88:3001/v1/user/signup',
                    {phoneNumber: PhoneNumber},
                ).then(function (response) {

                    if (response.data.return.status === 200) {
                        router.push({
                            pathname: '/user/verification',
                            query: {
                                phoneNumber: PhoneNumber
                                , password: password
                            }
                        }, '/user/verification');
                    }

                });
            } catch (error) {
                console.log('Error:', error);
               alert('خطا')
            }
        }

    }

    return <>
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
                               name={'password'}/>
                        <span className="material-icons-outlined"
                              onClick={handlePassword}>{visibility ? 'visibility_off' : 'visibility'}</span></Login_input>

                </div>

                <div>
                    <Login_btn onClick={handleSignupBtn}>ورود</Login_btn>
                    <Btn_detail>حساب کاربری دارید؟<span onClick={() => {
                        router.push('/user/login')
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