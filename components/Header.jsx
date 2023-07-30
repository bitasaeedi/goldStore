import Image from "next/image";
import {Header_container, Header_icon, Header_items, Search_bar} from '@/styled components/header-style'
import Link from "next/link";
import 'material-icons/iconfont/material-icons.css';
import {useState} from "react";

function Header() {
    let [showSearchBar,setShowSearchBar]=useState(false);
    return (
        <>
            <Header_container>
                <Header_icon margin={'left'}><Link href={''} onClick={()=>{setShowSearchBar(true)}}>

                    <Image src={require('@/public/header-Search-icon.svg')} alt="buy" width="24"
                              height="24"/></Link>
                    <Search_bar showSearchBar={showSearchBar}>
                        <input type='text' placeholder='جستجو...'/>
                        <span className="material-icons-outlined" onClick={()=>{setShowSearchBar(false)}}>close</span>
                    </Search_bar>
                </Header_icon>
                <Header_items><Link href={'/product/1'}>ایتم اول</Link></Header_items>
                <Header_items><Link href={'/user/login'}>ایتم دوم</Link></Header_items>
                <Header_items><Link href={'/user/signup'}>ایتم سوم</Link></Header_items>
                <Header_items><Link href={'/user/verification'}>ایتم چهارم</Link></Header_items>

                <Image src={require('@/public/header-icon.svg')} alt="logo" width="178" height="65"/>

                <Header_items><Link href={'/profile/info'}>ایتم اول</Link></Header_items>
                <Header_items><Link href={'/category'}>ایتم دوم</Link></Header_items>
                <Header_items><Link href={'/swiper'}>خرید طلای آب شده</Link> </Header_items>
                <Header_items>ایتم چهارم</Header_items>

                <Header_icon margin={'right'}><Link href={'/checkout'}><Image
                    src={require('@/public/header-Buy-icon.svg')} alt="buy" width="" height=""/></Link></Header_icon>

            </Header_container>
        </>
    );
}

export default Header;