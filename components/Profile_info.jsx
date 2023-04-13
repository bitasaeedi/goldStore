import {Profile_input, Profile_input_list} from "@/styled components/profile-style";
import Image from "next/image";

function ProfileInfo(props) {
    return (
        <>
            <Profile_input_list>

                <Profile_input>
                    <h6>نام</h6>
                    <div>
                        <input />
                        <Image src={require('@/public/edit.svg')}alt='edit' width='' height=''/>
                    </div>
                </Profile_input>

                <Profile_input>
                    <h6>نام خانوادگی</h6>
                    <div>
                        <input />
                        <Image src={require('@/public/edit.svg')}alt='edit' width='' height=''/>
                    </div>
                </Profile_input>

                <Profile_input>
                    <h6>ایمیل</h6>
                    <div>
                        <input type={"email"}/>
                        <Image src={require('@/public/edit.svg')}alt='edit' width='' height=''/>
                    </div>
                </Profile_input>

                <Profile_input>
                    <h6>کدملی</h6>
                    <div>
                        <input type={"number"}/>
                        <Image src={require('@/public/edit.svg')}alt='edit' width='' height=''/>
                    </div>
                </Profile_input>

                <Profile_input>
                    <h6>کدملی</h6>
                    <div>
                        <input />
                        <Image src={require('@/public/edit.svg')}alt='edit' width='' height=''/>
                    </div>
                </Profile_input>

                <Profile_input>
                    <h6>شماره تماس</h6>
                    <div>
                        <input />
                        <Image src={require('@/public/edit.svg')}alt='edit' width='' height=''/>
                    </div>
                </Profile_input>

                <Profile_input>
                    <h6>نام نمایشی</h6>
                    <div>
                        <input />
                        <Image src={require('@/public/edit.svg')}alt='edit' width='' height=''/>
                    </div>
                </Profile_input>

                <Profile_input>
                    <h6>رمز عبور</h6>
                    <div>
                        <input />
                        <Image src={require('@/public/edit.svg')}alt='edit' width='' height=''/>
                    </div>
                </Profile_input>

            </Profile_input_list>
        </>
    );
}

export default ProfileInfo;