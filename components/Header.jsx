import Image from "next/image";
import {Header_container, Header_icon, Header_items, Search_bar} from '@/styled components/header-style'
import Link from "next/link";
import 'material-icons/iconfont/material-icons.css';
import {useEffect, useState} from "react";
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
                pathname: '/category/categories',
                query: {
                    searchItem:text
                }
            }, '/category/categories');
            setShowSearchBar(false);
        }
    }
    function handleCategory(value){

    }
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        try {
            const accessToken = localStorage.getItem("access-token");
            setIsLoggedIn(accessToken !== null && accessToken !== undefined);
        } catch (error) {
            console.error("Error accessing localStorage:", error);
        }
    }, []);
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

                {  isLoggedIn? <Header_items><Link
                        href={{ pathname: 'http://user.talayto.com', query: { accessToken:localStorage.getItem("access-token") } }}>ورود به پروفایل</Link></Header_items>:
                    <Header_items><Link href={'http://talayto.com/login'}>ورود به حساب</Link></Header_items>}
                {/*<Header_items><Link href={'http://talayto.com/login'}>ورود به حساب</Link></Header_items>*/}
                <Header_items><Link href={'http://talayto.com/category/categories'}>محصولات</Link></Header_items>
                <Header_items><Link href={'http://talayto.com/category/categories'}>قسطی</Link></Header_items>
                <Header_items><Link href={'http://talayto.com'}>ایتم چهارم</Link></Header_items>

                <div onClick={()=>{
                    router.push({
                        pathname: 'http://talayto.com',
                        query: {
                            searchItem:text
                        }
                    }, 'http://talayto.com');
                }} className={'icon'}><Image src={require('@/public/header-icon.svg')} alt="logo" width="178" height="65"/></div>

                <Header_items onClick={()=>{
                    router.push({
                        pathname: 'http://talayto.com/category/earring',
                    });
                }}>گوشواره</Header_items>
                <Header_items
                    onClick={()=>{
                        router.push({
                            pathname: 'http://talayto.com/category/Necklace',
                        }, 'http://talayto.com/category/Necklace');
                    }}
                >گردنبند</Header_items>
                <Header_items
                    onClick={()=>{
                        router.push({
                            pathname: 'http://talayto.com/category/wristband',
                        }, 'http://talayto.com/category/wristband');
                    }}>دستبند</Header_items>
                <Header_items
                    onClick={()=>{
                        router.push({
                            pathname: 'http://talayto.com/category/ring',
                        }, 'http://talayto.com/category/ring');
                    }}>انگشتر</Header_items>

                <Header_icon margin={'right'}><Link href={'http://talayto.com/checkout'}><Image
                    src={require('@/public/header-Buy-icon.svg')} alt="buy" width="" height=""/></Link></Header_icon>

            </Header_container>
        </>
    );
}

export default Header;