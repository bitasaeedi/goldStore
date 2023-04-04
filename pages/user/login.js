import {
    Btn_detail,
    Forget_password, Login_btn,
    Login_container,
    Login_form,
    Login_image,
    Login_input,
    Login_input_title,
    Wrapper
} from "@/styled components/login-style";
import Image from "next/image";

function Login() {
    return <>
        <Wrapper>
            <Login_container>

                <Login_form>
                    <h6>ورود به حساب کاربری</h6>
                    <div>
                        <Login_input_title>شماره همراه</Login_input_title>
                        <Login_input><input placeholder='شماره را وارد کنید'/></Login_input>
                    </div>

                    <div>
                        <Login_input_title>رمز ورود</Login_input_title>
                        <Login_input><input type='password' placeholder='رمز را وارد کنید'/></Login_input>
                        <Forget_password>فراموشی رمز عبور</Forget_password>
                    </div>

                    <div>
                    <Login_btn>ورود</Login_btn>
                        <Btn_detail>حساب کاربری ندارید؟<span>ساخت حساب</span></Btn_detail>
                    </div>



                </Login_form>

                <Login_image>
                    <Image src={require('@/public/login.jpeg')} alt='login' width='' height=''/>
                </Login_image>

            </Login_container>
        </Wrapper>
    </>
}

export default Login;