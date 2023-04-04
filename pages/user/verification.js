import {
    Btn_detail,
    Login_container,
    Login_image, Square, Squares_container, Varification_btn,
    Varification_form,
    Wrapper
} from "@/styled components/login-style";
import Image from "next/image";

function Login() {
    return <>
        <Wrapper>
            <Login_container>

                <Varification_form>
                    <div>
                        <h6>کد پیامک شده را وارد کنید</h6>
                        <div>کد تاییدی به شماره   09123456789 ارسال شد
                            لطفا ان را در باکس زیر وارد کنید</div>
                        <div className='gold'>ویرایش شماره</div>
                    </div>
                    <Squares_container>
                        <Square/>
                        <Square/>
                        <Square/>
                        <Square/>
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
        </Wrapper>
    </>
}

export default Login;