import {
    ProFile,
    Profile_container, Profile_input,
    Profile_input_list,
    Profile_sidebar, Profile_sidebar_bottom, Profile_sidebar_top,
} from "@/styled components/profile-style";
import Image from "next/image";

function Profile(props) {
    return (
        <>
           <ProFile>
               <h4>پروفایل</h4>
            <Profile_container>

                {/* sidebar*/}
                <Profile_sidebar>

                    <Profile_sidebar_top>
                        <div className='person_info'>
                            <div className='image'>
                                <Image src={require('@/public/pro1.jpg')} alt={'profile'} width='' height=''/>
                            </div>
                            <div className='text'>
                                <div className='name'>سارا محمدی</div>
                                <div className='number'>09123456789</div>
                            </div>
                        </div>
                        <div className='wallet'>
                            <Image src={require('@/public/wallet.svg')} alt={'profile'} width='' height=''/>
                            <div>کیف پول</div>
                        </div>
                        <div className="money"> موجودی : 120,000,000 تومان</div>
                        <div className="buttons">
                            <div>تراکنش</div>
                            <div>افزایش موجودی</div>
                        </div>
                    </Profile_sidebar_top>

                    <Profile_sidebar_bottom>
                        <div className="menuitem choosen">
                            <Image src={require('@/public/user.svg')} alt={'profile'} width='' height=''/>
                            <div>حساب کاربری</div>
                        </div>
                        <div className="menuitem">
                            <Image src={require('@/public/heart.svg')} alt={'profile'} width='' height=''/>
                            <div>علاقه مندی ها</div>
                        </div>
                        <div className="menuitem">
                            <Image src={require('@/public/star.svg')} alt={'profile'} width='' height=''/>
                            <div>اخیر</div>
                        </div>
                        <div className="menuitem">
                            <Image src={require('@/public/setting.svg')} alt={'profile'} width='' height=''/>
                            <div>تنظیمات</div>
                        </div>
                        <div className="menuitem">
                            <Image src={require('@/public/notif.svg')} alt={'profile'} width='' height=''/>
                            <div>اعلان ها</div>
                        </div>
                        <div className="exit_btn">
                            <Image src={require('@/public/exit.svg')} alt={'profile'} width='' height=''/>
                           <div> خروج از حساب</div>
                        </div>
                    </Profile_sidebar_bottom>

                </Profile_sidebar>

                {/* input list*/}
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

            </Profile_container>
           </ProFile>
        </>
    );
}

export default Profile;