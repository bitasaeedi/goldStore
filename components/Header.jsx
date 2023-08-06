import Image from "next/image";
import {Header_container, Header_icon, Header_items, Search_bar} from '@/styled components/header-style'
import Link from "next/link";
import 'material-icons/iconfont/material-icons.css';
import {useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";

function Header() {
    let [showSearchBar,setShowSearchBar]=useState(false);
    let [text,setText]=useState();
    const router = useRouter();
    function handleText(event){
        setText(event.target.value)
    }
     function handleEnter(event){
        if(event.code==='Enter'){
            router.push({
                pathname: '/category',
                query: {
                    searchItem:text
                }
            }, '/category');
            setShowSearchBar(false);
        }
    }
    return (
        <>
            <Header_container>
                <Header_icon margin={'left'}><Link href={''} onClick={()=>{setShowSearchBar(true)}}>

                    <Image src={require('@/public/header-Search-icon.svg')} alt="buy" width="24"
                              height="24"/></Link>
                    <Search_bar showSearchBar={showSearchBar} >
                        <input type='text' placeholder='جستجو...'
                               onKeyDown={handleEnter}
                        onChange={handleText}
                        value={text}/>
                        <span className="material-icons-outlined" onClick={()=>{setShowSearchBar(false)}}>close</span>
                    </Search_bar>
                </Header_icon>
                <Header_items><Link href={'http://localhost:3000/user/login'}>ورود به حساب</Link></Header_items>
                <Header_items><Link href={'http://localhost:3000/category'}>محصولات</Link></Header_items>
                <Header_items><Link href={'/user/signup'}>قسطی</Link></Header_items>
                <Header_items><Link href={'/user/verification'}>ایتم چهارم</Link></Header_items>

                <Image src={require('@/public/header-icon.svg')} alt="logo" width="178" height="65"/>

                <Header_items><Link href={'/profile/info'}>گوشواره</Link></Header_items>
                <Header_items><Link href={'/category'}>گردنبند</Link></Header_items>
                <Header_items><Link href={'/swiper'}>دستبند</Link> </Header_items>
                <Header_items>انگشتر</Header_items>

                <Header_icon margin={'right'}><Link href={'/checkout'}><Image
                    src={require('@/public/header-Buy-icon.svg')} alt="buy" width="" height=""/></Link></Header_icon>

            </Header_container>
        </>
    );
}

export default Header;