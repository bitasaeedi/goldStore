import {Profile_Navbar, Profile_Navbar_top, Profile_Navbar_bottom} from "@/styled components/profile-style";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
function ProfileNavbar(props) {
    const router = useRouter();
    console.log(router.pathname)
    return (
       <>
           <Profile_Navbar navbarClicked={props.navbarClicked}>

               <Profile_Navbar_top>
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
               </Profile_Navbar_top>

               <Profile_Navbar_bottom>
                   <div className={router.pathname === "/profile/info" ? "menuitem choosen" : "menuitem"}  onClick={props.handleNavbar}>
                       <Image src={require('@/public/user.svg')} alt={'profile'} width='' height=''/>
                       <Link href={'/profile/info'}>حساب کاربری</Link>
                   </div>
                   <div className={router.pathname === "/profile/favorite" ? "menuitem choosen" : "menuitem"} onClick={props.handleNavbar}>
                       <Image src={require('@/public/heart.svg')} alt={'profile'} width='' height=''/>
                       <Link href='/profile/favorite'>علاقه مندی ها</Link>
                   </div>
                   <div className="menuitem">
                       <Image src={require('@/public/star.svg')} alt={'profile'} width='' height=''/>
                       <Link href='/'>اخیر</Link>
                   </div>
                   <div className="menuitem">
                       <Image src={require('@/public/setting.svg')} alt={'profile'} width='' height=''/>
                       <Link href='/'>تنظیمات</Link>
                   </div>
                   <div className="menuitem">
                       <Image src={require('@/public/notif.svg')} alt={'profile'} width='' height=''/>
                       <Link href='/'>اعلان ها</Link>
                   </div>
                   <div className="exit_btn">
                       <Image src={require('@/public/exit.svg')} alt={'profile'} width='' height=''/>
                       <div> خروج از حساب</div>
                   </div>
               </Profile_Navbar_bottom>

           </Profile_Navbar>
       </>
    );
}

export default ProfileNavbar;